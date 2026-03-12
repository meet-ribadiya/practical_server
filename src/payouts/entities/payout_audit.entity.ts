import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { auditActionsEnum } from 'src/constant/audit-actions';

export type PayoutAuditDocument = PayoutAudit & Document;

function customTimestamp(): number {
    return new Date().getTime();
}

@Schema()
export class PayoutAudit {
    _id: mongoose.Types.ObjectId;

    @Prop()
    payout_id: string;

    @Prop()
    action: auditActionsEnum;

    @Prop()
    performed_by: string;
    
    @Prop()
    timestamp: Date;
    
    @Prop({ default: customTimestamp })
    createdAt: number;

    @Prop({ default: customTimestamp })
    updatedAt: number;
}
export const PayoutAuditSchema = SchemaFactory.createForClass(PayoutAudit);
