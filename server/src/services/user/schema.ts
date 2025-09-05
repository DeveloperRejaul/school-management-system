// user.model.ts
import {
  Table, Column, Model, PrimaryKey, IsUUID, BelongsToMany, Unique,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import {
  UUIDV4,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import { School } from '../school/schema';
import { UserRole, UserRoleEnum } from './UserRole';

@Table({ tableName: 'Users' })
export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: UUIDV4 })
    id?: string;

  @Column({ allowNull: false })
    name: string;

  @Unique 
  @Column({ allowNull: false })
    email: string;

  @Column({ allowNull: false })
    password: string;

  @Column({ type: DataType.STRING, allowNull: true })
    avatar?: string | null; 

  @Column({
    allowNull: false,
    type: DataType.ENUM(...Object.values(UserRole).map(String)),
  })
    role: UserRoleEnum;

  @BelongsToMany(() => School, () => UserSchool)
    schools?: School[];
}


@Table({ tableName: 'UserSchools', timestamps: false })
export class UserSchool extends Model<UserSchool> {
  @PrimaryKey
  @ForeignKey(() => User)
  @Column({ type: DataType.UUID })
    userId: string;

  @PrimaryKey
  @ForeignKey(() => School)
  @Column({ type: DataType.UUID })
    schoolId: string;
}

