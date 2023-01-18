import { Quiz } from 'src/modules/quiz/quiz.entity';
import { Controller, Get, Post, Body, HttpCode, Param } from '@nestjs/common';
import { UsePipes } from '@nestjs/common/decorators';
import { ParseIntPipe, ValidationPipe } from '@nestjs/common/pipes';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')

export class QuizController {

    constructor(private quizService: QuizService) {
    }

    @Get('/')
    getAllQuiz() {
        return this.quizService.getAllQuiz()
    }

    @Get('/:id')
    async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz>{
        return await this.quizService.getQuizById(id);
    }

    @Post('/create')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData: CreateQuizDto) {
        return await this.quizService.createNewQuiz(quizData);
    }

}
