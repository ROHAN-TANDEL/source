import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ConnectionSample {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  version: string;
}
