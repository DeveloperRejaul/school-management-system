import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    // check env variables exist before stating server 
    const requiredEnv = [
      'PORT',
      'PG_HOST',
      'PG_PORT',
      'PG_USER',
      'PG_PASS',
      'PG_NAME',
    ];
    const env = new Set(Object.keys(process.env));
    if (!requiredEnv.every(key => env.has(key))) {
      console.error('Missing required environment variables');
      process.exit(1);
    }
    console.error('Environment variables successfully loaded');


    const PORT = parseInt(process.env.PORT!);
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT);
    console.log('App listening on port ' + PORT);
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
