import { Connection } from 'mongoose';
import { GirlSchema } from './schemas/girls.schema';

export const girlsProviders = [
  {
    provide: 'GIRL_MODEL',
    useFactory: (connection: Connection) => connection.model('Girl', GirlSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];