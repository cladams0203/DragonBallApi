import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from 'src/entity/character.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private characterRepository: Repository<Character>,
  ) {}

  async createCharacter(
    name: string,
    image_url?: string,
    debut?: string,
    race?: string,
    gender?: string,
    height?: string,
    weight?: string,
    occupation?: string,
  ) {
    const character = await this.characterRepository.create({
      name,
      image_url,
      debut,
      race,
      gender,
      height,
      weight,
      occupation,
    });
    const res = this.characterRepository.save(character);
    return res;
  }
}
