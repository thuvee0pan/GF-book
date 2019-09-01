import { Injectable } from '@nestjs/common';
import { GirlFriends } from '../mocks/GirlFriends.mock';
import { Model } from 'mongoose';
import { Girl } from '../interface/girl.interface';
import { CreateGirlFriendDTO } from '../dto/createGirlFriendDTO';
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class GirlFriendsService {
  constructor(@InjectModel('Girl') private readonly girlModel: Model<Girl>) { }

  girlFriends = GirlFriends;

  async findAllGirls(): Promise<Girl[]> {
    return await this.girlModel.find().exec();
  }
  async addGirlFriend(girlDto: CreateGirlFriendDTO): Promise<Girl> {
    const createdGirl = new this.girlModel(girlDto);
    return await createdGirl.save();
  }
  async getGirlFriend(id): Promise<any> {
    return await this.girlModel.findById(id).exec();
  }
  async deleteGirlFriend(gfId): Promise<any> {
    return await this.girlModel.findByIdAndRemove(gfId);
  }
  async updateGirlFriend(
    id: string,
    name: string,
    image: string,
    age: number,
    contactNo: string,
    whatsApp: string,
    instagram: string,
    facebook: string,
  ) {
    const updategirl = await this.getGirlFriend(id);
    if (name) {
      updategirl.name = name;
    }
    if (image) {
      updategirl.image = image;
    }
    if (age) {
      updategirl.age = age;
    }
    if (contactNo) {
      updategirl.contactNo = contactNo;
    }
    if (whatsApp) {
      updategirl.whatsApp = whatsApp;
    }
    if (instagram) {
      updategirl.instagram = instagram;
    }
    if (facebook) {
      updategirl.facebook = facebook;
    }
    const girl = await updategirl.save();
    return girl;
  }
}
