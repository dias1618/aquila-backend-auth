import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './controllers/auth.controller';
import { UsuarioService } from './services/usuario.service';
import { AxiosCommunicationService } from './services/external-communication/axios-communication.service';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [
    AppController,
    AuthController,
  ],
  providers: [
    AppService,
    UsuarioService,
    AxiosCommunicationService,
  ],
})
export class AppModule {}
