import { Prop, Schema , SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"
//Integração com o Módulo Mongoose: O módulo @nestjs/mongoose é uma extensão do Mongoose que fornece recursos específicos para o NestJS, como a capacidade de criar modelos injetáveis com base em classes. Ao marcar uma classe com @Schema(), você está dizendo ao módulo que esta classe representa um esquema Mongoose que ele deve gerenciar.

export type UserDocument = HydratedDocument<User>
@Schema()
export class User{
    @Prop({required:true})
    name:string
    @Prop({required:true})
    email:string
    @Prop({required:true})
    password:string
    @Prop()
    avatar:string
}

export const UserSchema = SchemaFactory.createForClass(User)