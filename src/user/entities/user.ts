import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public login: string;

  @Column()
  public password: string;

  @Column()
  public name: string;

  @Column()
  public lastName: string;

  @Column({ nullable: true })
  public age?: number;

  @Column({ nullable: true })
  public city?: string;

  @Column({ nullable: true })
  public description?: string;
}
export default User;
