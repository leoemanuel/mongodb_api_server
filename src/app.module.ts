import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:InBsa6l1C7yidVux@cluster0.zk86o8x.mongodb.net/?retryWrites=true&w=majority',
      // { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
    ), 
    HistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
