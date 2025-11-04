import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class user {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}