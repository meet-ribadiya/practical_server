import { Injectable } from '@nestjs/common';
import { CreatePayoutAuditDto } from './dto/create-payout_audit.dto';
import { UpdatePayoutAuditDto } from './dto/update-payout_audit.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payout, PayoutDocument } from 'src/payouts/entities/payout.entity';
import { User, UserDocument } from 'src/users/entities/user.entity';
import { Vendor, VendorDocument } from 'src/vendors/entities/vendor.entity';
import { PayoutAudit, PayoutAuditDocument } from './entities/payout_audit.entity';

@Injectable()
export class PayoutAuditsService {
  constructor(
    @InjectModel(PayoutAudit.name) private payoutAuditModel: Model<PayoutAuditDocument>,
    @InjectModel(Payout.name) private payoutModel: Model<PayoutDocument>,
    @InjectModel(Vendor.name) private vendorModel: Model<VendorDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) { }
  
  create(createPayoutAuditDto: CreatePayoutAuditDto) {
    return 'This action adds a new payoutAudit';
  }

  findAll() {
    return `This action returns all payoutAudits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payoutAudit`;
  }

  update(id: number, updatePayoutAuditDto: UpdatePayoutAuditDto) {
    return `This action updates a #${id} payoutAudit`;
  }

  remove(id: number) {
    return `This action removes a #${id} payoutAudit`;
  }
}
