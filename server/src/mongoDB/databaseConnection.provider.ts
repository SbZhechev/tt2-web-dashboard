import * as mongoose from 'mongoose';
import { CONNECTION_TOKEN } from 'src/constants';
import { ConfigService } from '@nestjs/config';

export const databaseConnectionProvider = {
  provide: CONNECTION_TOKEN,
  useFactory: async (configService: ConfigService) => {
    try {
      let connectionString = configService.get('DB_CONNECTION_URL');
      let connection = await mongoose.connect(connectionString);
      console.log('MongoDB connection successful!');
      
      return connection;
    } catch (error) {
      console.log(error);
    }
  },
  inject: [ConfigService]
}
