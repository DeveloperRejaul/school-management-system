// user.model.ts
import {Table, Column, Model, PrimaryKey, IsUUID,DataType} from 'sequelize-typescript';
import {UUIDV4,InferAttributes,InferCreationAttributes} from 'sequelize';


@Table({ tableName: 'Teachers' })
export class Teacher extends Model<InferAttributes<Teacher>,InferCreationAttributes<Teacher>> {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: UUIDV4 })
    id?: string;
}

