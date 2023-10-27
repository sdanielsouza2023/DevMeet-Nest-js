//Importa o módulo `NestFactory` do pacote `@nestjs/core`.
import { NestFactory } from '@nestjs/core';
// Importa o módulo `AppModule` do arquivo './app.module'.
import { AppModule } from './app.module';
// Importa o `ValidationPipe` do pacote `@nestjs/common`.
import { ValidationPipe } from '@nestjs/common'; //ValidationPipe é usado para aplicar validação global aos dados de entrada do aplicativo.
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['debug', 'error', 'log', 'warn']
  });
  app.enableCors() //permite solicitações de origens diferentes por meio da configuração do CORS.
  app.useGlobalPipes(
    //app.useGlobalPipes adiciona um ValidationPipe global ao aplicativo. Esse pipe de validação pode transformar os dados de entrada, 
    //permitir apenas propriedades "brancas" (whitelisted) 
    //e pode permitir solicitações com campos não reconhecidos (forbidNonWhitelisted: false).
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: false
    })
  )
  // Define um prefixo global para todas as rotas do aplicativo como 'api'.
  app.setGlobalPrefix('api')
  await app.listen(process.env.SERVER_PORT); //app.listen inicia o aplicativo na porta 3000. Isso fará com que o aplicativo comece a ouvir por solicitações HTTP na porta especificada.
}
// Chama a função `bootstrap` para iniciar o aplicativo.
bootstrap(); //Esta função é definida como assíncrona e serve como o ponto de entrada principal do aplicativo. É onde a configuração do aplicativo e a inicialização ocorrem.