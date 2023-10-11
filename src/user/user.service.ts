import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {User, UserDocument} from './schemas/user.schemas'
import { Model } from "mongoose";
import { ResgisterDto } from "./dtos/register.dto";
import * as CryptoJs from 'crypto-js'
@Injectable()
export class UserService{
    constructor(@InjectModel(User.name)private readonly userModel:Model<UserDocument>){
  }

  async create(dto: ResgisterDto){
    dto.password = CryptoJs.AES.encrypt(dto.password,process.env.USER_CYPHER_SECRET_KEY).toString()
    const createdUser = new this.userModel(dto)
    await  createdUser.save()
  }

  async existsByEmail(email: String) : Promise<boolean>{
    const result = await this.userModel.findOne({email})
    if(result){
        return true
    }
    return false
  }
}