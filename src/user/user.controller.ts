import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import createUserDto from './dto/createUser.dto';
import User from './entities/user';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUser: createUserDto) {
    return this.userService.createNewUser(createUser);
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
}
