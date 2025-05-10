import { Injectable } from '@nestjs/common';
import { School } from './schema';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class SchoolService {
  constructor(
    @InjectModel(School) private readonly model: typeof School
  ) { }
  create (body) {
    return this.model.create({...body});
  }


  getByName(name:string){
    console.log('server', name);
    return this.model.findOne({where:{name}});
  }
}