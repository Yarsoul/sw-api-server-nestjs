import { Injectable } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Tweet from './entities/tweet.entity';

@Injectable()
export class TweetService {
  constructor(
    @InjectRepository(Tweet)
    private tweetRepository: Repository<Tweet>,
  ) {}

  async createTweet(userId: number, newTweet: CreateTweetDto) {
    const _newTweet = this.tweetRepository.create(newTweet);
    _newTweet.user_id = userId;
    const date = new Date();
    const output =
      String(date.getDate()).padStart(2, '0') +
      '/' +
      String(date.getMonth() + 1).padStart(2, '0') +
      '/' +
      date.getFullYear();
    _newTweet.date = output;
    await this.tweetRepository.save(_newTweet);
    return _newTweet;
  }

  findAll() {
    return `This action returns all tweet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tweet`;
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
