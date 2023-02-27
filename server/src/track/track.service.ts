import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Track } from "./entity/track.entity";
import { Comment } from "./entity/comment.entity";
import { CreateTrackDto } from "./dto/create-track.dto";
import { AddCommentDto } from "./dto/add-comment.dto";
import { FileService, FileType } from "../file/file.service";

@Injectable()
export class TrackService {

    constructor(
        @InjectRepository(Track)
        private trackRepository: Repository<Track>,
        @InjectRepository(Comment)
        private commentRepository: Repository<Comment>,
        private fileService: FileService
    ){}

    async create(dto:CreateTrackDto, picture:Express.Multer.File, audio:Express.Multer.File):Promise<Track>{
        const imageFile = this.fileService.createFile(FileType.IMAGE, picture);
        const audioFile = this.fileService.createFile(FileType.AUDIO, audio);
        const track = await this.trackRepository.create({...dto, listens:0, picture:imageFile, audio:audioFile});
        return await this.trackRepository.save(track);
    }

    async getAll(count = 10, offset = 0):Promise<Track[]>{
        return await this.trackRepository.find({
            take:count,
            skip: offset
        });
    }

    async getOne(id:number):Promise<Track>{
        return await this.trackRepository.findOne({
            relations: {
                comments:true
            },    
            where:{
                id:id
            },     
        });
    }

    async delete(id:number):Promise<void>{
        await this.trackRepository.delete(id);
    }

    async addComment(dto:AddCommentDto):Promise<Comment>{
        const track = await this.trackRepository.findOne({where: {id:dto.trackId}});
        const comment = new Comment();
        comment.username = dto.username;
        comment.text = dto.text;
        comment.track = track;
        return await this.commentRepository.save(comment);
    }

    async listen(id:number):Promise<void>{
        const track = await this.trackRepository.findOne({where: {id:id}});
        track.listens += 1;
        await this.trackRepository.save(track); 
    }

    async search(query:string):Promise<Track[]>{
        return await this.trackRepository.findBy({
            name: ILike(`%${query}%`)
        })
    }
}