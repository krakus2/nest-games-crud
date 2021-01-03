import { IsNumber, IsOptional, IsString, validate } from 'class-validator';

export class Game {
  @IsNumber() @IsOptional() readonly id: number;
  @IsString() readonly title: string;
  @IsString({
    message:
      'Custom error message with special tokens - $value, property - $property, target - $target, constraint1 - $constraint1',
  })
  readonly description: string;
  @IsString() readonly cover: string;
}
