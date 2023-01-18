import { Quiz } from 'src/modules/quiz/entities/quiz.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('questions')
export class Question extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        type: 'varchar',
    })

    question: string;

    @ManyToOne(()=> Quiz, (quiz) => quiz.questions)
    quiz: Quiz
}