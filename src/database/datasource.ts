import { config } from "dotenv";
import { DataSource, DataSourceOptions } from "typeorm";
import { dataSourceOptions } from "./typeorm.config";
config();

const options: DataSourceOptions = {
	type: "postgres",
	host: process.env.POSTGRES_HOST,
	port: Number.parseInt(process.env.POSTGRES_PORT as string),
	username: process.env.POSTRGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
	synchronize: false,
	entities: ["dist/**/*.entity.js"],
	migrations: ["dist/migrations/*.js"],
};

const datasource = new DataSource(dataSourceOptions);

export default datasource;