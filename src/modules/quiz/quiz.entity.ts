
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

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

}