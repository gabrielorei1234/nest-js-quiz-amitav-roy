import { Question } from '../modules/quiz/entities/question.entity';
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import {Injectable} from '@nestjs/common'
import { Quiz } from "src/modules/quiz/entities/quiz.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'quiz',
    entities: [Quiz,Question],
    synchronize: true,
}