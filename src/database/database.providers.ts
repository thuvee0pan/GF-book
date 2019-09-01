import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(`mongodb+srv://imthuvee:zAtslcLxvEq0jeqV@cluster0-a0the.mongodb.net/test?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useFindAndModify: false }),
  },
];