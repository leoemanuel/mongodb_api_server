import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService:UsersService){}

    @Get()
    findAll(){
        return this.userService.findAll();
    }
    @Get(':id')
    findById(@Param('id') id:string){
        return this.userService.findById(+id);
    }
    @Post()
    create(){
        return 'create';
    }
    @Patch()
    update(){
        return 'update';
    }
    @Delete()
    delete(){
        return 'delete'
    }
}
