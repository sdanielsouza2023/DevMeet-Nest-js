import { IsArray, IsNotEmpty, IsNumber, IsString, Max, Min , ValidateNested } from "class-validator"
import {CreateMeetDto} from "./createMeet.dto"
import { MeetMessagesHelper } from "../helpers/meetmessages.helper"
import { Type } from "class-transformer"

export class UpdateMeetDto extends CreateMeetDto{

    @IsArray({message: MeetMessagesHelper.UPDATE_OBJECT_NAME_NOT_VALID})
    @Type(() => UpdateMeetObjectDto)
    @ValidateNested({each:true})
    objects: Array<UpdateMeetObjectDto> 
}

export class UpdateMeetObjectDto{
    @IsNotEmpty({message: MeetMessagesHelper.UPDATE_OBJECT_NAME_NOT_VALID})
    name:string

    @IsNumber({},{message:MeetMessagesHelper.UPDATE_XY_NOT_VALID})
    @Min(0,{message:MeetMessagesHelper.UPDATE_XY_NOT_VALID})
    @Max(8, {message:MeetMessagesHelper.UPDATE_XY_NOT_VALID})

    x:number
    @IsNumber({},{message:MeetMessagesHelper.UPDATE_XY_NOT_VALID})
    @Min(0,{message:MeetMessagesHelper.UPDATE_XY_NOT_VALID})
    @Max(8, {message:MeetMessagesHelper.UPDATE_XY_NOT_VALID})
    y:number 

    @IsNumber({}, {message:MeetMessagesHelper.UPDATE_ZINDEX_NOT_VALID})
    zIndex:number 

    @IsString({message: MeetMessagesHelper.UPDATE_ORIENTATION_NOT_VALID})
    orientation: string
}