import { PartialType } from '@nestjs/swagger';
import { CreatePayoutAuditDto } from './create-payout_audit.dto';

export class UpdatePayoutAuditDto extends PartialType(CreatePayoutAuditDto) {}
