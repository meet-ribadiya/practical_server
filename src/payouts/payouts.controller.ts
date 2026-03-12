import { Controller, Get, Post, Body, Query, Param, Req, UseGuards } from '@nestjs/common';
import { PayoutsService } from './payouts.service';
import { CreatePayoutDto } from './dto/create-payout.dto';
import { UpdatePayoutDto } from './dto/update-payout.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/lib/jwt-auth.guard';

@ApiTags('Payouts')
@UseGuards(JwtAuthGuard)
@Controller('payouts')
export class PayoutsController {
  constructor(private readonly payoutsService: PayoutsService) { }

  @Get()
  getPayouts(@Query() query) {
    return this.payoutsService.getPayouts(query);
  }

  @Post()
  createPayout(@Body() dto, @Req() request) {
    return this.payoutsService.createPayout(dto, request.user.id);
  }

  @Get(':id')
  getPayout(@Param('id') id: string) {
    return this.payoutsService.getPayoutById(id);
  }

  @Post(':id/submit')
  submitPayout(@Param('id') id: string, @Req() request) {
    return this.payoutsService.submitPayout(id, request.user.id);
  }

  @Post(':id/approve')
  approvePayout(@Param('id') id: string, @Req() request) {
    return this.payoutsService.approvePayout(id, request.user.id);
  }

  @Post(':id/reject')
  rejectPayout(
    @Param('id') id: string,
    @Body('reason') reason: string,
    @Req() request,
  ) {
    return this.payoutsService.rejectPayout(id, reason, request.user.id);
  }
}
