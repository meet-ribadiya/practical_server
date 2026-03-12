import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PayoutAuditsService } from './payout_audits.service';
import { CreatePayoutAuditDto } from './dto/create-payout_audit.dto';
import { UpdatePayoutAuditDto } from './dto/update-payout_audit.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/lib/jwt-auth.guard';

@ApiTags('Payout Audits')
@UseGuards(JwtAuthGuard)
@Controller('payout-audits')
export class PayoutAuditsController {
  constructor(private readonly payoutAuditsService: PayoutAuditsService) { }

  @Post()
  create(@Body() createPayoutAuditDto: CreatePayoutAuditDto) {
    return this.payoutAuditsService.create(createPayoutAuditDto);
  }

  @Get()
  findAll() {
    return this.payoutAuditsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payoutAuditsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePayoutAuditDto: UpdatePayoutAuditDto) {
    return this.payoutAuditsService.update(+id, updatePayoutAuditDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payoutAuditsService.remove(+id);
  }
}
