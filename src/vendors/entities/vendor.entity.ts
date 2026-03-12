import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type VendorDocument = Vendor & Document;

function customTimestamp(): number {
    return new Date().getTime();
}

@Schema()
export class Vendor {
    _id: mongoose.Types.ObjectId;

    @Prop()
    name: string;

    @Prop()
    bank_account: string;

    @Prop()
    upi_id: string;

    @Prop()
    ifsc_code: string;

    @Prop({ default: true })
    is_active: boolean;

    @Prop({ default: customTimestamp })
    createdAt: number;

    @Prop({ default: customTimestamp })
    updatedAt: number;
}
export const VendorSchema = SchemaFactory.createForClass(Vendor);