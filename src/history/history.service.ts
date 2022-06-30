import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { History, HistoryDocument } from "./schema/history.model";
import { CreateHistoryDTO } from "./dto/history.dto";

@Injectable()
export class HistoryService {

    constructor(@InjectModel(History.name) private _model: Model<HistoryDocument>) {}

    create(createHistoryDTO: CreateHistoryDTO): Promise<History> {
        const newHistory = new this._model(createHistoryDTO);
        return newHistory.save();
    }

    getAll(): Promise<History[]> {
        return this._model.find().exec();
    }
    
    getById(id:string):string {
        return `History ${id}`; 
    }

    update(id: string):string {
        return `Update History ${id}`;
    }

    delete(id: string):string {
        return `Delete History ${id}`;
    }
}
