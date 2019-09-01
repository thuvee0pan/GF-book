import { Module } from '@nestjs/common';
import { GirlFriendsModule } from './girl-frends/girl-friends.module';
import {MongooseModule } from '@nestjs/mongoose'
@Module({
  imports: [
    GirlFriendsModule,
    MongooseModule.forRoot(
      `mongodb+srv://thuvee:brcZDM6lcfJUGKzw@cluster0-a0the.mongodb.net/gf-store?retryWrites=true&w=majority`,
      { useNewUrlParser: true })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
