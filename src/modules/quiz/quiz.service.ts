import { Quiz } from 'src/modules/quiz/quiz.entity';
import { Injectable, Get } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { QuizRepository } from './quiz.repository';

@Injectable()

export class QuizService {
    constructor(@InjectRepository(QuizRepository) private quizRepository: QuizRepository,) {

    }
    @Get('/')
    getAllQuiz() {
        return [1, 2, 3]
    }

    async createNewQuiz(quiz: CreateQuizDto) {
        return await this.quizRepository.save(quiz);
    }

    async getQuizById(id: number): Promise<Quiz> {
        return await this.quizRepository.findOne({
            where: {
                id: id                
            },
            relations:['questions']
        });
    }

}