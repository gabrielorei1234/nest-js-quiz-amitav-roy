import { Question } from './question.entity';

import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';

@Entity('quizes')

export class Quiz extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The quiz unique indetifier',
    })

    id: number;

    @Column({
        type: 'varchar'
    })

    title: string;

    @Column({
        type: 'varchar'
    })

    description: string;

    @Column({
        type: 'boolean',
        default: 1
    })
    isActive: boolean;

    @OneToMany(() => Question, (question) => question.quiz)
    questions: Question[];

}