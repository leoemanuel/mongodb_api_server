import { Controller, NotFoundException } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { Body, Param, } from '@nestjs/common';
import { CreateHistoryDTO } from './dto/history.dto';

import { HistoryService } from "./history.service";

@Controller('history')
export class HistoryController {

    constructor(private readonly historyService: HistoryService) { }

    @Get()
    async find() {
        const histories = await this.historyService.getAll();
        if (!histories || histories.length <= 0) throw new NotFoundException('Empty result', 'No history found');

        return { 
            message: 'received',
            histories,
        };
    }

    @Get(':id')
    findById(@Param('id') id: string): string {
        return this.historyService.getById(id);
    }

    @Post()
    async post(@Body() historyDto: CreateHistoryDTO)  {
        const newHistory = await this.historyService.create(historyDto);
        return {
            message: 'created',
            newHistory,
        }
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
