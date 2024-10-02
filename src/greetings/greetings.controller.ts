import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GreetingsService } from './greetings.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('greetings')
@UseGuards(AuthGuard())
export class GreetingsController {
    constructor(private readonly greetingsService: GreetingsService) { }

    @Get()
    @ApiResponse({ status: 200, description: 'You will need to change the data' + 
        ' of the .env file, with your CLIENT_ID and TENANT_ID, also generate your own token' })
    async getGreetings(): Promise<any> {
        return this.greetingsService.getGreetings();
    }
}