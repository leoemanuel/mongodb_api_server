import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HistoryDocument = History & Document;

@Schema()
export class History {
    @Prop()
    _id: string;
    @Prop()
    username: string;
    @Prop([Number])
    scores: number[];
}

export const HistorySchema = SchemaFactory.createForClass(History);