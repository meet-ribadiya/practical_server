import { Module } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { VendorsController } from './vendors.controller';
import { Vendor, VendorSchema } from './entities/vendor.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vendor.name, schema: VendorSchema }]),
  ],
  controllers: [VendorsController],
  providers: [VendorsService,JwtService],
  exports: [VendorsService],
})
export class VendorsModule { }
