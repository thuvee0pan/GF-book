import { Module } from '@nestjs/common';
import { GirlFriendsController } from './girl-friends.controller';
import { GirlFriendsService } from './girl-friends.service';
import { girlsProviders } from './girl.provider';
import { DatabaseModule } from '../../dist/src/database/database.module';
import {MongooseModule } from '@nestjs/mongoose'
import { GirlSchema } from './schemas/girls.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {name:'Girl', schema: GirlSchema}
      ]
    ),
  ],
  controllers: [
    GirlFriendsController,
  ],
  providers: [GirlFriendsService],
})
export class GirlFriendsModule {}
