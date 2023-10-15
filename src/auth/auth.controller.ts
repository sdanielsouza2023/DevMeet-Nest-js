import { Controller, Post, HttpCode, HttpStatus, Body } from "@nestjs/common";
import {AuthService} from "./auth.service"
import { LoginDto } from "./dtos/login.dto"; 
import { ResgisterDto } from "src/user/dtos/register.dto";
import { ISPublic } from "./decorators/ispublic.decorator";

@Controller("auth")
export class AuthController{
    constructor(private readonly authService: AuthService){}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ISPublic()
    login(@Body() dto: LoginDto){
        return this.authService.login(dto)
    }

    @Post('register')
    @HttpCode(HttpStatus.OK)
    @ISPublic()
    register(@Body() dto:ResgisterDto){
        return this.authService.resgister(dto)
    }
}