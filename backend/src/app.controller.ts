import { Controller, Get, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
const pdfParser = require('pdf-parse');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('pdf'))
  async uploadFile(@UploadedFile() file) {
    console.log(file);
    const pdf = await pdfParser(file.buffer);
    console.log(pdf.text);
    return {status: 'ok'};
  }
}
