import { Repository } from 'typeorm';
import { CustomRepository } from 'src/config/typeorm-ex.decorator';
import { Quiz } from "./quiz.entity";

@CustomRepository(Quiz)
export class QuizRepository extends Repository<Quiz>{}