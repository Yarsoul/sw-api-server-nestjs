import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Tweet {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public text: string;

  @Column()
  public date: string;

  @Column()
  public user_id: number;
}
export default Tweet;
