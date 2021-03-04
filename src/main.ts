import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Options
  const options = new DocumentBuilder()
    .setTitle('Dragon Ball Anime API')
    .setDescription('API for the Dragon Ball TV Series')
    .setVersion('1.0.0')
    .build();
  //build swagger documents
  const docs = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, docs);

  const port = process.env.PORT || 5000;

  await app.listen(port, () => console.log(`App is running on port ${port}`));
}
bootstrap();
