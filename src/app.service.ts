import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Serviço aquila-backend-auth funcionando!';
  }
}
