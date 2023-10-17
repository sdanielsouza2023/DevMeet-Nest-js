import { IsString, IsEmail,MinLength } from "class-validator"
import { UserMessagesHelper } from "../helpers/messages.helper"

export class UpdateUserDto {
    @MinLength(2,{message:UserMessagesHelper.RESGISTER_NOME_NOT_VALID})
    name: string
    @IsString()
    @IsEmail({},{message:UserMessagesHelper.RESGISTER_EMAIL_NOT_VALID})
    email:string
    avatar: string
}