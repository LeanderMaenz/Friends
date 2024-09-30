import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Aaddress,
  Friends,
} from '../models';
import {AaddressRepository} from '../repositories';

export class AaddressFriendsController {
  constructor(
    @repository(AaddressRepository)
    public aaddressRepository: AaddressRepository,
  ) { }

  @get('/aaddresses/{id}/friends', {
    responses: {
      '200': {
        description: 'Friends belonging to Aaddress',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Friends),
          },
        },
      },
    },
  })
  async getFriends(
    @param.path.number('id') id: typeof Aaddress.prototype.id,
  ): Promise<Friends> {
    return this.aaddressRepository.friends(id);
  }
}
