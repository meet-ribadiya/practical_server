import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { payoutModeEnum } from 'src/constant/payout-mode';
import { payoutStatusEnum } from 'src/constant/payout-status';

export type PayoutDocument = Payout & Document;

function customTimestamp(): number {
    return new Date().getTime();
}

@Schema()
export class Payout {
    _id: mongoose.Types.ObjectId;

    @Prop()
    vendor_id: string;

    @Prop()
    amount: number;

    @Prop()
    mode: payoutModeEnum;

    @Prop()
    status: payoutStatusEnum;

    @Prop()
    note: string;

    @Prop()
    decision_reason: string;

    @Prop()
    created_by: string;

    @Prop()
    submitted_by: string;

    @Prop()
    approved_by: string;

    @Prop()
    rejected_by: string;

    @Prop()
    submitted_at: number;

    @Prop()
    approved_at: number;

    @Prop()
    rejected_at: number;

    @Prop({ default: customTimestamp })
    createdAt: number;

    @Prop({ default: customTimestamp })
    updatedAt: number;
}
export const PayoutSchema = SchemaFactory.createForClass(Payout);