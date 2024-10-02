import { Module } from '@nestjs/common';
import { GreetingsModule } from './greetings/greetings.module';
import { AuthModule } from './authentication/auth.module';

@Module({
  imports: [GreetingsModule,AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
