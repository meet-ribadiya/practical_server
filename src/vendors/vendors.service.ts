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

  create(createVendorDto: CreateVendorDto) {
    return 'This action adds a new vendor';
  }

  findAll() {
    return `This action returns all vendors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vendor`;
  }

  update(id: number, updateVendorDto: UpdateVendorDto) {
    return `This action updates a #${id} vendor`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendor`;
  }
}
