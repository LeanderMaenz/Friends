import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'test_09yb',
  connector: 'postgresql',
  url: 'postgresql://test_09yb_user:mldVX9rrJ5hpmJLIovxB6X8etUw5fmCm@dpg-crp9ofe8ii6s73cebdq0-a.oregon-postgres.render.com/test_09yb?ssl=true',
  host: '',
  port: 5432,
  user: '',
  password: 'mldVX9rrJ5hpmJLIovxB6X8etUw5fmCm',
  database: ''
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
