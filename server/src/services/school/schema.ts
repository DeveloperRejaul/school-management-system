import { Column, IsUUID, Model, PrimaryKey, Table } from 'sequelize-typescript';
import {v4 as UUIDV4} from 'uuid';

@Table
export class School extends Model<School> {
    @IsUUID(4)
    @PrimaryKey
    @Column({defaultValue: UUIDV4()})
      id: string;

    @Column({ allowNull: false })
      name: string;
    
    @Column({ allowNull: false })
      email: string;
}