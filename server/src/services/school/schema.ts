// user.model.ts
import {Table, Column, Model, PrimaryKey, IsUUID, Unique,DataType} from 'sequelize-typescript';
import {UUIDV4,InferAttributes,InferCreationAttributes} from 'sequelize';


@Table({ tableName: 'Schools' })
export class School extends Model<InferAttributes<School>,InferCreationAttributes<School>> {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: UUIDV4 })
    id?: string;

  @Unique 
  @Column({ allowNull: false })
    name: string;

  @Unique 
  @Column({ allowNull: false })
    email: string;

  @Column({ type: DataType.STRING, allowNull: true })
    avatar?: string | null;
  
  @Column({ allowNull: false })
    title: string;  

  @Column({ allowNull: false })
    subTitle: string;

  @Column({ allowNull: false })
    slogan: string;
}

