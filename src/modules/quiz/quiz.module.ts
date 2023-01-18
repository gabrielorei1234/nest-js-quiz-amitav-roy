import { QuestionRepository } from './question.repository';
import { QuestionService } from './question.service';
import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizRepository } from './quiz.repository';
import { QuizService } from './quiz.service';
import { TypeOrmExModule } from 'src/config/typeorm-ex.module';
import { QuestionController } from './question.controller';

@Module({
    controllers:[QuizController, QuestionController],
    imports: [TypeOrmExModule.forCustomRepository([QuizRepository, QuestionRepository])],
    providers: [QuizService, QuestionService],
})
export class QuizModule {}
