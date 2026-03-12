import { Injectable, NotFoundException,BadRequestException } from '@nestjs/common';
import { CreatePayoutDto } from './dto/create-payout.dto';
import { UpdatePayoutDto } from './dto/update-payout.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/entities/user.entity';
import { Vendor, VendorDocument } from 'src/vendors/entities/vendor.entity';
import { Payout, PayoutDocument } from './entities/payout.entity';
import { PayoutAudit, PayoutAuditDocument } from './entities/payout_audit.entity';
import { payoutModeEnum } from 'src/constant/payout-mode';
import { payoutStatusEnum } from 'src/constant/payout-status';

@Injectable()
export class PayoutsService {
  constructor(
    @InjectModel(Payout.name) private payoutModel: Model<PayoutDocument>,
    @InjectModel(Vendor.name) private vendorModel: Model<VendorDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(PayoutAudit.name) private payoutAuditModel: Model<PayoutAuditDocument>,
    private jwtService: JwtService,
  ) { }

  async createPayout(dto: any, userId: string) {

    const vendor = await this.vendorModel.findById(dto.vendor_id);

    if (!vendor) {
      throw new NotFoundException('Vendor not found');
    }

    const payout = await this.payoutModel.create({
      ...dto,
      status: 'Draft',
      createdBy: userId,
    });

    await this.payoutAuditModel.create({
      payout_id: payout._id.toString(),
      action: 'CREATED',
      performed_by: userId,
      timestamp: new Date(),
    });

    return {
      message: 'Payout created successfully',
      data: payout,
    };
  }

  async getPayouts(query: any) {

    const filter: any = {};

    if (query.status) {
      filter.status = query.status;
    }

    if (query.vendor_id) {
      filter.vendor_id = query.vendor_id;
    }

    const payouts = await this.payoutModel
      .find(filter)
      .populate('vendor_id')
      .sort({ createdAt: -1 });

    return {
      message: 'Payout list fetched successfully',
      data: payouts,
    };
  }

  async getPayoutById(id: string) {

    const payout = await this.payoutModel
      .findById(id)
      .populate('vendor_id');

    if (!payout) {
      throw new NotFoundException('Payout not found');
    }

    return {
      message: 'Payout fetched successfully',
      data: payout,
    };
  }

  async submitPayout(id: string, userId: string) {

    const payout = await this.payoutModel.findById(id);

    if (!payout) {
      throw new NotFoundException('Payout not found');
    }

    if (payout.status !== 'Draft') {
      throw new BadRequestException('Only Draft payouts can be submitted');
    }

    payout.status = payoutStatusEnum.Submitted;
    payout.submitted_by = userId;
    payout.submitted_at = new Date();

    await payout.save();

    await this.payoutAuditModel.create({
      payout_id: payout._id.toString(),
      action: 'SUBMITTED',
      performed_by: userId,
      timestamp: new Date(),
    });

    return {
      message: 'Payout submitted successfully',
      data: payout,
    };
  }

  async approvePayout(id: string, userId: string) {

    const payout = await this.payoutModel.findById(id);

    if (!payout) {
      throw new NotFoundException('Payout not found');
    }

    if (payout.status !== 'Submitted') {
      throw new BadRequestException('Only Submitted payouts can be approved');
    }

    payout.status = payoutStatusEnum.Approved;
    payout.approved_by = userId;
    payout.approved_at = new Date();

    await payout.save();

    await this.payoutAuditModel.create({
      payout_id: payout._id.toString(),
      action: 'APPROVED',
      performed_by: userId,
      timestamp: new Date(),
    });

    return {
      message: 'Payout approved successfully',
      data: payout,
    };
  }

  async rejectPayout(id: string, reason: string, userId: string) {

    const payout = await this.payoutModel.findById(id);

    if (!payout) {
      throw new NotFoundException('Payout not found');
    }

    if (payout.status !== 'Submitted') {
      throw new BadRequestException('Only Submitted payouts can be rejected');
    }

    payout.status = payoutStatusEnum.Rejected;
    payout.decision_reason = reason;
    payout.rejected_by = userId;
    payout.rejected_at = new Date();

    await payout.save();

    await this.payoutAuditModel.create({
      payout_id: payout._id.toString(),
      action: 'REJECTED',
      performed_by: userId,
      timestamp: new Date(),
    });

    return {
      message: 'Payout rejected successfully',
      data: payout,
    };
  }

  async vendorList() {
    const vendors = await this.vendorModel
      .find({ is_active: true })
      .sort({ createdAt: -1 })
      .select({ name: 1, _id: 1 });

    return {
      message: 'Vendor list fetched successfully',
      data: vendors,
    };
  }
}
