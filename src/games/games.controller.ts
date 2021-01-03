import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { GamesService } from './games.service';

import { Games } from '../games';
import { Game } from '../game';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  // it don't have to by async, as there is no async code inside of the route controller
  async index(): Promise<Games> {
    return this.gamesService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: number): Promise<Game> {
    return this.gamesService.find(id);
  }

  @Post()
  async create(@Body() game: Game): Promise<void> {
    this.gamesService.create(game);
  }

  @Put()
  async update(@Body() game: Game): Promise<void> {
    this.gamesService.update(game);
  }

  @Delete()
  async delete(@Param('id') id: number): Promise<void> {
    this.gamesService.delete(id);
  }
}
