// user.model.ts
import {Table, Column, Model, PrimaryKey, IsUUID, DataType} from 'sequelize-typescript';
import {UUIDV4,InferAttributes,InferCreationAttributes} from 'sequelize';


@Table({ tableName: 'Classs' })
export class Class extends Model<InferAttributes<Class>,InferCreationAttributes<Class>> {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: UUIDV4 })
    id?: string;


}

