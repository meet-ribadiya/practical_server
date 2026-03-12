import { Injectable } from '@nestjs/common';
import { CreatePayoutDto } from './dto/create-payout.dto';
import { UpdatePayoutDto } from './dto/update-payout.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/entities/user.entity';
import { Vendor, VendorDocument } from 'src/vendors/entities/vendor.entity';
import { Payout, PayoutDocument } from './entities/payout.entity';

@Injectable()
export class PayoutsService {
  constructor(
    @InjectModel(Payout.name) private payoutModel: Model<PayoutDocument>,
    @InjectModel(Vendor.name) private vendorModel: Model<VendorDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) { }

  create(createPayoutDto: CreatePayoutDto) {
    return 'This action adds a new payout';
  }

  findAll() {
    return `This action returns all payouts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payout`;
  }

  update(id: number, updatePayoutDto: UpdatePayoutDto) {
    return `This action updates a #${id} payout`;
  }

  remove(id: number) {
    return `This action removes a #${id} payout`;
  }
}
