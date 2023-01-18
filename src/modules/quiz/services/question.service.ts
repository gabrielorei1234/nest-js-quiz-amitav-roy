import { Quiz } from 'src/modules/quiz/entities/quiz.entity';
import { QuestionRepository } from '../repositories/question.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { Injectable, Get } from '@nestjs/common'

@Injectable()

export class QuestionService {
    constructor(
        @InjectRepository(QuestionRepository)
        private questionRepository: QuestionRepository,
    ) {
    }

    async createQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<Question> {
        const newQuestion = await this.questionRepository.save({
            question: question.question,
        });

        quiz.questions = [...quiz.questions,newQuestion];
        await quiz.save()
        return newQuestion;
    }
}