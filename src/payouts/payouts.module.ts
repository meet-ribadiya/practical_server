import { Module } from '@nestjs/common';
import { PayoutsService } from './payouts.service';
import { PayoutsController } from './payouts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/entities/user.entity';
import { Vendor, VendorSchema } from 'src/vendors/entities/vendor.entity';
import { Payout, PayoutSchema } from './entities/payout.entity';
import { JwtService } from '@nestjs/jwt';
import { PayoutAudit, PayoutAuditSchema } from './entities/payout_audit.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Payout.name, schema: PayoutSchema }]),
    MongooseModule.forFeature([{ name: Vendor.name, schema: VendorSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: PayoutAudit.name, schema: PayoutAuditSchema }]),

  ],
  controllers: [PayoutsController],
  providers: [PayoutsService, JwtService],
  exports: [PayoutsService],
})
export class PayoutsModule { }
