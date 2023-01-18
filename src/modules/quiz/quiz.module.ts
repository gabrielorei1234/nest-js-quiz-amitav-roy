import { QuestionRepository } from './repositories/question.repository';
import { QuestionService } from './services/question.service';
import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizRepository } from './repositories/quiz.repository';
import { QuizService } from './services/quiz.service';
import { TypeOrmExModule } from 'src/config/typeorm-ex.module';
import { QuestionController } from './controllers/question.controller';

@Module({
    controllers:[QuizController, QuestionController],
    imports: [TypeOrmExModule.forCustomRepository([QuizRepository, QuestionRepository])],
    providers: [QuizService, QuestionService],
})
export class QuizModule {}
