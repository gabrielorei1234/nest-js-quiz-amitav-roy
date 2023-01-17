import { ValidationPipe } from '@nestjs/common/pipes';
import { UsePipes } from '@nestjs/common/decorators';
import { Controller, Post, Body } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';

@Controller('question')
export class QuestionController {
@Post('')
@UsePipes(ValidationPipe)
saveQuestion(@Body() question: CreateQuestionDto){
return question;
}
}