import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import User from './entities/user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateUserDto from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getAllUsers() {
    return this.userRepository.find();
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (user) {
      return user;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async getUserByName(name: string, lastName: string) {
    const user = await this.userRepository.findOneBy({ name, lastName });
    if (user) {
      return user;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async createUser(createUser: CreateUserDto) {
    const newUser = await this.userRepository.create(createUser);
    await this.userRepository.save(newUser);
    return newUser;
  }

  async findUserByLogin(login: string): Promise<User | undefined> {
    const user = await this.userRepository.findOneBy({ login });
    if (user) {
      return user;
    }
    return undefined;
  }

  async createNewUser(createUser: CreateUserDto): Promise<User | string> {
    const login = createUser.login;
    const user = await this.userRepository.findOneBy({ login });
    if (user) {
      return `Пользователь с логином: ${login} уже существует`;
    }
    await this.createUser(createUser);
    return `Пользователь с логином: ${login} зарегистрирован`;
  }
}
