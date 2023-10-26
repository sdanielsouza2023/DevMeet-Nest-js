import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt.guard';
import { MeetService } from './meet/meet.service';
import { MeetModule } from './meet/meet.module';
import { RoomModule } from './room/room.module';

@Module({
  imports:[
    ConfigModule.forRoot(),    
    MongooseModule.forRoot(process.env.DATABASE_URL),
    AuthModule, UserModule, MeetModule, RoomModule],
  controllers: [],
  providers: [{provide:APP_GUARD, useClass: JwtAuthGuard}]
})
export class AppModule {}
