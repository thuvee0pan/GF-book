import { Body, Controller, Delete, Get, Logger, Param, Post, Query, Patch, Put } from '@nestjs/common';
import { GirlFriendsService } from './girl-friends.service';
// @ts-ignore
import { CreateGirlFriendDTO } from '../dto/createGirlFriendDTO';

@Controller('girls')
export class GirlFriendsController {
  constructor(private gFService: GirlFriendsService) { }

  @Get()
  async getGirlFriends() {
    return await this.gFService.findAllGirls();
  }

  @Get(':girlID')
  async getBook(@Param('girlID') id) {
    console.log(id);
    return await this.gFService.getGirlFriend(id);
  }

  @Post()
  async addBook(@Body() createGfDTO: CreateGirlFriendDTO) {
    return await this.gFService.addGirlFriend(createGfDTO);
  }

  @Delete()
  async deleteBook(@Query() query) {
    return await this.gFService.deleteGirlFriend(query.gfID);
  }

  @Patch(':id')
  updateGirl(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('image') image: string,
    @Body('age') age: number,
    @Body('contactNo') contactNo: string,
    @Body('whatsApp') whatsApp: string,
    @Body('instagram') instagram: string,
    @Body('facebook') facebook: string,

  ) {
    this.gFService.updateGirlFriend(id, name, image, age, contactNo, whatsApp, instagram, facebook);
  }
}
