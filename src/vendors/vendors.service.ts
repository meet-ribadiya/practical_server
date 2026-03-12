import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vendor, VendorDocument } from './entities/vendor.entity';

@Injectable()
export class VendorsService {
  constructor(
    @InjectModel(Vendor.name) private vendorModel: Model<VendorDocument>,
    private jwtService: JwtService,
  ) { }

  async createVendor(createVendorDto: CreateVendorDto) {

    const vendor = await this.vendorModel.create({
      ...createVendorDto,
      is_active: true,
    });

    return {
      message: 'Vendor created successfully',
      data: vendor,
    };
  }

  async getVendors() {

    const vendors = await this.vendorModel
      .find({ is_active: true })
      .sort({ createdAt: -1 });

    return {
      message: 'Vendor list fetched successfully',
      data: vendors,
    };
  }
}
