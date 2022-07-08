import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { TweetModule } from './tweet/tweet.module';
import { TweetService } from './tweet/tweet.service';
import { TweetController } from './tweet/tweet.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    UserModule,
    TweetModule,
    AuthModule,
  ],
  controllers: [AppController, UserController, TweetController],
  providers: [AppService, UserService, TweetService, AuthService],
})
export class AppModule {}
