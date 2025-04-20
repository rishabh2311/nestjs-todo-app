import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from "typeorm";

dotenv.config(); // Load environment variables from .env file

//DataSourceOptions is an interface that defines the options for creating a DataSource instance in TypeORM.
// It includes properties like type, host, port, username, password, database, entities, synchronize, etc.  
// DataSourceOptions extends TypeOrmModuleOptions, which is an interface that defines the options for configuring TypeORM in a NestJS application.
// TypeOrmModuleOptions includes properties like type, host, port, username, password, database, entities, synchronize, etc.
// TypeOrmModuleOptions is used in the TypeOrmModule.forRoot() method to configure TypeORM in a NestJS application.
// DataSourceOptions is used to create a DataSource instance in TypeORM, which is used to connect to the database and perform operations on it.


export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'todo_db',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'], 
    // entities: [User, Todo], // don't use glob in migrations context
    synchronize: true, // Set to false in production
    // dropSchema: true,
};
export const AppDataSource = new DataSource(dataSourceOptions);

console.log('TypeORM DataSource loaded:', dataSourceOptions);
