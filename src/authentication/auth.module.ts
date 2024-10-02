import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { CustomConfigModule } from '../config/config.module'; // Asegúrate de importar el módulo correcto
import { AzureADStrategy } from './strategies/azuread.strategys';

@Module({
    imports: [PassportModule, CustomConfigModule], // Importa el módulo de configuración
    providers: [AzureADStrategy],
    exports: [PassportModule],
})
export class AuthModule {}