import { Injectable } from '@nestjs/common';

const user = [
    {
        id:1,
        username:'Leo',
        fullname:'Miranda',
        email:'leonardo.miranda@claro.com.ar',
        password: 12345
    },
    {
        id:2,
        username:'Leo2',
        fullname:'Miranda',
        email:'leonardo.miranda@claro.com.ar',
        password: 12345
    },
    {
        id:3,
        username:'Leo3',
        fullname:'Miranda',
        email:'leonardo.miranda@claro.com.ar',
        password: 12345
    },
    {
        id:4,
        username:'Leo4',
        fullname:'Miranda',
        email:'leonardo.miranda@claro.com.ar',
        password: 12345
    }
]

@Injectable()
export class UsersService {

    findAll(){
        return user;
    }
    findById(id:number){
        return user.find(element=>element.id === id)
    }
}
