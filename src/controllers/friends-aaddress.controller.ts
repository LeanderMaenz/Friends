import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Friends,
  Aaddress,
} from '../models';
import {FriendsRepository} from '../repositories';

export class FriendsAaddressController {
  constructor(
    @repository(FriendsRepository) protected friendsRepository: FriendsRepository,
  ) { }

  @get('/friends/{id}/aaddresses', {
    responses: {
      '200': {
        description: 'Array of Friends has many Aaddress',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Aaddress)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Aaddress>,
  ): Promise<Aaddress[]> {
    return this.friendsRepository.aaddresses(id).find(filter);
  }

  @post('/friends/{id}/aaddresses', {
    responses: {
      '200': {
        description: 'Friends model instance',
        content: {'application/json': {schema: getModelSchemaRef(Aaddress)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Friends.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aaddress, {
            title: 'NewAaddressInFriends',
            exclude: ['id'],
            optional: ['friendsId']
          }),
        },
      },
    }) aaddress: Omit<Aaddress, 'id'>,
  ): Promise<Aaddress> {
    return this.friendsRepository.aaddresses(id).create(aaddress);
  }

  @patch('/friends/{id}/aaddresses', {
    responses: {
      '200': {
        description: 'Friends.Aaddress PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aaddress, {partial: true}),
        },
      },
    })
    aaddress: Partial<Aaddress>,
    @param.query.object('where', getWhereSchemaFor(Aaddress)) where?: Where<Aaddress>,
  ): Promise<Count> {
    return this.friendsRepository.aaddresses(id).patch(aaddress, where);
  }

  @del('/friends/{id}/aaddresses', {
    responses: {
      '200': {
        description: 'Friends.Aaddress DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Aaddress)) where?: Where<Aaddress>,
  ): Promise<Count> {
    return this.friendsRepository.aaddresses(id).delete(where);
  }
}
