import { ApiProperty } from '@nestjs/swagger';
import {  IsNumber, IsOptional, IsString, IsEnum, Min } from 'class-validator';
import { payoutModeEnum } from 'src/constant/payout-mode';

export class CreatePayoutDto {

  @ApiProperty()
  vendor_id: string;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  amount: number;

  @ApiProperty({ enum: payoutModeEnum })
  @IsEnum(payoutModeEnum)
  mode: payoutModeEnum;
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  note?: string;
}