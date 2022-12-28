import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { CreateNotificationDto } from './CreateNotification.dto';

@Controller('notifications')
export class AppController {
  // @Get()
  // serverStatus() {
  //   return {
  //     status: 'Ok',
  //     message: 'Server running',
  //     date: new Date(),
  //   };
  // }
  @Get()
  serverStatus() {
    return {
      status: 'Ok',
      message: 'Server running',
      date: new Date(),
    };
  }

  @Post()
  async createNotification(@Body() body: CreateNotificationDto) {
    return body;
  }
}
