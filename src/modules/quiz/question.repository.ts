import { Question } from './question.entity';
import { Repository } from 'typeorm';
import { CustomRepository } from 'src/config/typeorm-ex.decorator';

@CustomRepository(Question)
export class QuestionRepository extends Repository<Question>{

}