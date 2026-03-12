import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type UserDocument = User & Document;

function customTimestamp(): number {
    return new Date().getTime();
}

@Schema()
export class User {
    _id: mongoose.Types.ObjectId;

    @Prop({ unique: true })
    email: string;

    @Prop()
    password: string;

    @Prop()
    roles: string;

    @Prop({ default: customTimestamp })
    createdAt: number;

    @Prop({ default: customTimestamp })
    updatedAt: number;
}

export const UserSchema = SchemaFactory.createForClass(User);