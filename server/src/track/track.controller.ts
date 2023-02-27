import { Controller, Get, Post, Delete, Body, Param, Query, UseInterceptors } from "@nestjs/common";
import { CreateTrackDto } from "./dto/create-track.dto";
import { AddCommentDto } from "./dto/add-comment.dto";
import { TrackService } from './track.service';
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { UploadedFiles } from "@nestjs/common/decorators";


@Controller('tracks')
export class TrackController {
    constructor(private readonly trackService: TrackService){}

    @Post('create')
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'picture', maxCount:1},
        {name: 'audio', maxCount:1},
    ]))
    create(@UploadedFiles() files, @Body() dto:CreateTrackDto){
        const {picture, audio} = files;
        console.log(files, dto);
        return this.trackService.create(dto, picture[0], audio[0]);
    };

    @Get('all')
    getAll(@Query('count') count:number, @Query('offset') offset:number){
        return this.trackService.getAll(count, offset);
    };

    @Get('search')
    search(@Query('query') query:string){
        return this.trackService.search(query);
    };

    @Get(':id')
    getOne(@Param('id') id:number ){
        return this.trackService.getOne(id);
    };

    @Delete(':id')
    delete(@Param('id') id:number){
        return this.trackService.delete(id);
    }

    @Post('comment')
    addComment(@Body() dto:AddCommentDto){
        return this.trackService.addComment(dto);
    } 
    
    @Get('listen/:id')
    listen(@Param('id') id:number){
        return this.trackService.listen(id);
    }
}