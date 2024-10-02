import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { CustomConfigModule } from '../config/config.module';
import { AzureADStrategy } from './strategies/azuread.strategys';

@Module({
    imports: [PassportModule, CustomConfigModule],
    providers: [AzureADStrategy],
    exports: [PassportModule],
})
export class AuthModule {}