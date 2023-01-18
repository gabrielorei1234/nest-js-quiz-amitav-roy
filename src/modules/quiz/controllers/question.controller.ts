import { QuizService } from '../services/quiz.service';
import { QuestionService } from '../services/question.service';
import { ValidationPipe } from '@nestjs/common/pipes';
import { UsePipes } from '@nestjs/common/decorators';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';

@Controller('question')
export class QuestionController {
    constructor(private questionService: QuestionService, private quizService: QuizService) {

    }    

    @Post('')
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
        const quiz = await this.quizService.getQuizById(question.quizId);
        return await this.questionService.createQuestion(question, quiz);
    }
}