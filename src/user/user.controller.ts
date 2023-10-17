import {Controller, Get, Put,Request, BadRequestException, Body, HttpCode, HttpStatus} from '@nestjs/common'
import { UserService } from './user.service';
import { UserMessagesHelper } from './helpers/messages.helper';
//import { dot } from 'node:test/reporters';
import { UpdateUserDto } from './dtos/updateuser.dto';
import { request } from 'http';

@Controller('user')
export class UserController{
    constructor(private readonly userService:UserService){}
        @Get()
        async getUser(@Request() req){
            const {userId} = req?.user;
            console.log(userId + "passando por aqui 01")
            const user = await this.userService.getUserById(userId)
            console.log(user + "passando por aqui!!!!!!!!!!!!!!!!!!!!")
        if(!user){
            throw new BadRequestException(UserMessagesHelper.GET_USER_NOT_FOUND)
        }
       
        return {
            name:user.name,
            email:user.email,
            avatar:user.avatar,
            id:user._id
        }
    } 

    @Put()
    @HttpCode(HttpStatus.OK)
    async updateUser(@Request() req, @Body() dto: UpdateUserDto){
        const {userId} = req?.user
        await this.userService.updateUser(userId, dto)
    } // por eremos resceber do req e do body
}