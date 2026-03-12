import { Module } from '@nestjs/common';
import { PayoutsService } from './payouts.service';
import { PayoutsController } from './payouts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/entities/user.entity';
import { Vendor, VendorSchema } from 'src/vendors/entities/vendor.entity';
import { Payout, PayoutSchema } from './entities/payout.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
   imports: [
      MongooseModule.forFeature([{ name: Payout.name, schema: PayoutSchema }]),
      MongooseModule.forFeature([{ name: Vendor.name, schema: VendorSchema }]),
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    
    ],
  controllers: [PayoutsController],
  providers: [PayoutsService,JwtService],
  exports: [PayoutsService],
})
export class PayoutsModule {}
