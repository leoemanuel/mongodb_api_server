import { Controller } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';

import { HistoryService } from "./history.service";

@Controller('history')
export class HistoryController {

    constructor(private readonly historyService: HistoryService) { }

    @Get()
    find(): string[] {
        return this.historyService.getAll();
    }
    @Get(':id')
    findById(@Param('id') id: string): string {
        return this.historyService.getById(id);
    }

    @Post()
    post(): string {
        return this.historyService.create();
    }

    @Put(':id')
    put(@Param('id') id: string): string {
        return this.historyService.update(id);
    }

    @Delete(':id')
    delete(@Param('id') id: string): string {
        return this.historyService.delete(id);
    }

}
