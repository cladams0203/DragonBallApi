import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Series } from './series.entiny';

@Entity('characters')
export class Character extends BaseEntity {
  @Column('text', { nullable: false, unique: true })
  name: string;

  @Column('text', { nullable: true })
  image_url: string;

  @Column('text', { nullable: true })
  debut: string;

  @Column('text', { nullable: true })
  race: string;

  @Column('text', { nullable: true })
  gender: string;

  @Column('text', { nullable: true })
  height: string;

  @Column('text', { nullable: true })
  weight: string;

  @Column('text', { nullable: true })
  occupation: string;

  @ManyToMany(() => Series, (series) => series.characters)
  series: Series[];
}
