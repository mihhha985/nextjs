import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from "./entity/comment.entity";
import { Track } from "./entity/track.entity";
import { TrackController } from "./track.controller";
import { TrackService } from "./track.service";
import { FileService } from "../file/file.service";

@Module({
    imports: [TypeOrmModule.forFeature([Track, Comment])],
    controllers: [TrackController],
    providers: [TrackService, FileService],
})
export class TrackModule {}