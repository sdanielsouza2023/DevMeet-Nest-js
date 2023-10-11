import { IsEmail , MinLength, MaxLength, Matches, IsString} from "class-validator"
import { UserMessagesHelper } from "../helpers/messages.helper"


export class ResgisterDto{
    @MinLength(2,{message:UserMessagesHelper.RESGISTER_NOME_NOT_VALID})
    name:string

    @IsEmail({},{message:UserMessagesHelper.RESGISTER_EMAIL_NOT_VALID})
    email:string
    @MinLength(4,{message:UserMessagesHelper.RESGISTER_PASSWORD_NOT_VALID})
    @MaxLength(12,{message:UserMessagesHelper.RESGISTER_PASSWORD_NOT_VALID})
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{message:UserMessagesHelper.RESGISTER_PASSWORD_NOT_VALID})
    password:string
    @IsString()
    avatar:string
}