import { Module } from '@nestjs/common';
import { TrackControllers } from './track.controllers';
import { TrackService } from './track.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Track, TrackSchema } from './schemas/track.schema';
import { CommentSchema, Comment } from './schemas/comment.schema';
import { FileService } from '../file/file.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  controllers: [TrackControllers],
  providers: [TrackService, FileService],
})
export class TrackModule {}
