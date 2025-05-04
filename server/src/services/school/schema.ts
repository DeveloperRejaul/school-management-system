import { Column, IsUUID, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';

@Table
export class School extends Model<School> {
    @IsUUID(4)
    @PrimaryKey
    @Column({defaultValue: UUIDV4()})
      id: string;

    @Unique
    @Column({ allowNull: false, unique: true})
      name: string;
    
    @Column({ allowNull: false })
      email: string;
}

