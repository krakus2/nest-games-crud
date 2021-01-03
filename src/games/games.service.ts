import { Injectable } from '@nestjs/common';

import { Games } from '../games';
import { Game } from '../game';

@Injectable()
export class GamesService {
  private readonly games: Games = {
    1: {
      id: 1,
      title: 'Cyberpunk 2077',
      description:
        'Osadzona w otwartym świecie w klimacie science fiction gra RPG oparta na papierowym systemie fabularnym Cyberpunk. Cyberpunk 2077 został opracowany przez studio CD Projekt RED, które wsławiło się kultową serią o Wiedźminie.',
      cover: 'https://cdn.gracza.pl/galeria/gry13/grupy/368105421.jpg',
    },
    2: {
      id: 2,
      title: 'The Last of Us: Part II',
      description:
        'Kontynuacja przygodowej gry akcji studia Naughty Dog z 2013 roku, będącej jedną z najwyżej ocenianych tytułów na PlayStation. Fabuła The Last of Us 2 kontynuuje wątki z pierwszej części, gdzie epidemia wywołana przez pasożytnicze grzyby doprowadziła do upadku cywilizacji.',
      cover: 'https://cdn.gracza.pl/galeria/gry13/84830093.jpg',
    },
  };

  findAll(): Games {
    return this.games;
  }

  create(newGame: Game): void {
    const id: number = Date.now();

    this.games[id] = { id, ...newGame };
  }

  find(id: number): Game {
    const game = this.games[id];

    if (!game) {
      throw new Error('No game found!');
    }

    return game;
  }

  update(game: Game): void {
    if (!this.games[game.id]) {
      throw new Error('No game found!');
    }

    this.games[game.id] = game;
  }

  delete(id: number): void {
    if (!this.games[id]) {
      throw new Error('No game found!');
    }

    delete this.games[id];
  }
}
