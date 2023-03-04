import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('paste')
export class Paste {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    body: string;
    @Column()
    language: string;
    @Column()
    views: number;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}