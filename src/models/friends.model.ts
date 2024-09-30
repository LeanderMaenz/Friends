import {Entity, model, property, hasMany} from '@loopback/repository';
import {Aaddress} from './aaddress.model';

@model()
export class Friends extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  firstname: string;

  @property({
    type: 'string',
    required: true,
  })
  lastname: string;

  @hasMany(() => Aaddress)
  aaddresses: Aaddress[];

  constructor(data?: Partial<Friends>) {
    super(data);
  }
}

export interface FriendsRelations {
  // describe navigational properties here
}

export type FriendsWithRelations = Friends & FriendsRelations;
