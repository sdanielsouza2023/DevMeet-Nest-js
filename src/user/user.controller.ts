import {Controller, Get, Request, BadRequestException} from '@nestjs/common'
import { UserService } from './user.service';
import { UserMessagesHelper } from './helpers/messages.helper';

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
}