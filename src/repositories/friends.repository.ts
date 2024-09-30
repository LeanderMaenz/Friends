import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Friends, FriendsRelations, Aaddress} from '../models';
import {AaddressRepository} from './aaddress.repository';

export class FriendsRepository extends DefaultCrudRepository<
  Friends,
  typeof Friends.prototype.id,
  FriendsRelations
> {

  public readonly aaddresses: HasManyRepositoryFactory<Aaddress, typeof Friends.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('AaddressRepository') protected aaddressRepositoryGetter: Getter<AaddressRepository>,
  ) {
    super(Friends, dataSource);
    this.aaddresses = this.createHasManyRepositoryFactoryFor('aaddresses', aaddressRepositoryGetter,);
    this.registerInclusionResolver('aaddresses', this.aaddresses.inclusionResolver);
  }
}
