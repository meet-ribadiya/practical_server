import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVendorDto {

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    upi_id?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    bank_account?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    ifsc?: string;
}