// user.model.ts
import {Table, Column, Model, PrimaryKey, IsUUID,DataType} from 'sequelize-typescript';
import {UUIDV4,InferAttributes,InferCreationAttributes} from 'sequelize';


@Table({ tableName: 'Notices' })
export class Notice extends Model<InferAttributes<Notice>,InferCreationAttributes<Notice>> {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: UUIDV4 })
    id?: string;

}

