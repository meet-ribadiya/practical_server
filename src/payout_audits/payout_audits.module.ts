import { Module } from '@nestjs/common';
import { PayoutAuditsService } from './payout_audits.service';
import { PayoutAuditsController } from './payout_audits.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Payout, PayoutSchema } from 'src/payouts/entities/payout.entity';
import { User, UserSchema } from 'src/users/entities/user.entity';
import { Vendor, VendorSchema } from 'src/vendors/entities/vendor.entity';
import { PayoutAudit, PayoutAuditSchema } from './entities/payout_audit.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PayoutAudit.name, schema: PayoutAuditSchema }]),
    MongooseModule.forFeature([{ name: Payout.name, schema: PayoutSchema }]),
    MongooseModule.forFeature([{ name: Vendor.name, schema: VendorSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [PayoutAuditsController],
  providers: [PayoutAuditsService],
  exports: [PayoutAuditsService],
})
export class PayoutAuditsModule { }
