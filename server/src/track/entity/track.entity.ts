import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from './comment.entity';

@Entity()
export class Track {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  artist: string;

  @Column()
  text: string;

  @Column()
  listens: number;

  @Column({nullable:true})
  picture: string;

  @Column({nullable:true})
  audio: string;

  @OneToMany(type => Comment, comment => comment.track)
  comments: Comment[];  
}