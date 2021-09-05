import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
    MongooseModule.forRoot(
      process.env.DATABASE_LINK ||
        'mongodb+srv://nikVeras:Bender2282@cluster0.pyh3q.mongodb.net/music-app?retryWrites=true&w=majority',
    ),
    FileModule,
    TrackModule,
  ],
})
export class AppModule {}
