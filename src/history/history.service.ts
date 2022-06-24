import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { History, HistoryDocument } from "./schema/history.model";

@Injectable()
export class HistoryService {

    constructor(@InjectModel(History.name) private _model: Model<HistoryDocument>) {}

    create():string {
        return "Create History";
    }

    getAll():string[] {
        return ["History 1", "History 2", "History 3", "History 4"];
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
