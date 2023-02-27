import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Track } from './track.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  text: string;
  
  @ManyToOne(() => Track, (track) => track.comments)
  track: Track;
}