import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingsService {

    async getGreetings(): Promise<any> {
        return { "message": "Welcome User !! Greetings from NestJS !!" };
    }
}