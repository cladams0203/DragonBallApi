import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Character } from './character.entity';

@Entity('series')
export class Series extends BaseEntity {
  @Column('text', { nullable: false, unique: true })
  name: string;

  @Column('text', { nullable: true })
  original_run: string;

  @Column('text', { nullable: true })
  image_url: string;

  @Column('int', { nullable: true })
  episode_count: number;

  @ManyToMany(() => Character, (character) => character.series)
  characters: Character[];
}
