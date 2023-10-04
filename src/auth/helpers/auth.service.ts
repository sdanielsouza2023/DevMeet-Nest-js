import { BadRequestException } from "@nestjs/common";
import { loginDto } from "../dtos/login.dto";
import { MessagesHelper } from "./messages.helper";

export class AuthService{
    login(dto: loginDto){
        if(dto.login !== 'teste@teste.com' || dto.password !== 'test@123'){
            throw new BadRequestException(MessagesHelper.AUTH_LOGIN_NOT_FOUND)
        }
    }
}