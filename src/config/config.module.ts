// src/config/config.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule.forRoot()], // Carga las variables de entorno
    exports: [ConfigModule], // Exporta ConfigModule para que esté disponible en otros módulos
})
export class CustomConfigModule {}
