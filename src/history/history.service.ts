import { Injectable } from '@nestjs/common';

@Injectable()
export class HistoryService {

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
