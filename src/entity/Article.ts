import {Entity, PrimaryGeneratedColumn, Column, Index, getRepository} from "typeorm";


@Entity({ name: 'article' })
export class Article {
  @PrimaryGeneratedColumn("uuid")
  id: number = 0;

  
  
  @Column('varchar', { length: 50 })
  articleName: string = "";

  @Column('varchar', { length: 50 })
  nickName: string = "";

  @Column('varchar', { length: 15000, nullable: true })
  content: string = "";
  
  @Column({ type: "timestamptz", default: "now()" })
  createdAt: Date = new Date();

  @Column({ type: "timestamptz" })
  updatedAt: Date = new Date();
}