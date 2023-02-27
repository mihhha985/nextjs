import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { FileModule } from './file/file.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Track } from './track/entity/track.entity';
import { Comment } from './track/entity/comment.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
@Module({
  imports:[
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    TypeOrmModule.forRoot({
      type:  'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'nintendo27',
      database: 'music',
      entities: [Track, Comment],
      synchronize: true,
    }), 
    TrackModule,
    FileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
