import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UploadModule } from './upload/upload.module';
import { UploadService } from './upload/upload.service';
import { UploadController } from './upload/upload.controller';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    AuthModule,
    UploadModule,
  ],
  controllers: [UploadController],
  providers: [UploadService],
})
export class AppModule {}
