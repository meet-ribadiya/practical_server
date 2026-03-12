import { Controller, Get, Post, Body, Req, Param, Delete, UseGuards } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/lib/jwt-auth.guard';


@ApiTags('Vendors')
@UseGuards(JwtAuthGuard)
@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) { }

  @Post()
  async createVendor(
    @Body() createVendorDto: CreateVendorDto
  ) {
    return this.vendorsService.createVendor(createVendorDto);
  }

  @Get()
  async getVendors() {
    return this.vendorsService.getVendors();
  }

}
