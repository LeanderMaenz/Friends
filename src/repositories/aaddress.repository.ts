import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Aaddress, AaddressRelations, Friends} from '../models';
import {FriendsRepository} from './friends.repository';

export class AaddressRepository extends DefaultCrudRepository<
  Aaddress,
  typeof Aaddress.prototype.id,
  AaddressRelations
> {

  public readonly friends: BelongsToAccessor<Friends, typeof Aaddress.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('FriendsRepository') protected friendsRepositoryGetter: Getter<FriendsRepository>,
  ) {
    super(Aaddress, dataSource);
    this.friends = this.createBelongsToAccessorFor('friends', friendsRepositoryGetter,);
    this.registerInclusionResolver('friends', this.friends.inclusionResolver);
  }
}
