import * as compression from 'compression';
import * as express from 'express';
import * as methodOverride from 'method-override';
import * as winston from 'winston';
import * as controller from './controller';
import {SERVER_PORT, SERVER_HOST, DB_PASSWORD, DB_USER, DB_NAME} from './env';

import {Sequelize} from "sequelize-typescript";
import {Carrier} from "./models/Carrier";
import {Truck} from "./models/Truck";

const app = express();

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.simple(),
        winston.format.printf((info) => {
            return `${info.timestamp} - ${info.level}: ${info.message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: 'logs/logfile.log'})
    ]
});

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    logging: logger.debug.bind(logger),
    dialect: "postgres",
    port: 5432,
    models: [Carrier, Truck]
});

const dbConnect = async () => {
    try {
        await sequelize.authenticate();
        logger.log('info', 'Connection to DB has been established successfully.');
    } catch (error) {
        logger.log('error', 'Unable to connect to the database:', error);
    }
}

dbConnect();

app.use(compression());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(methodOverride());

app.use('/api', controller.default);

app.listen(SERVER_PORT, () => {
    logger.log('info', `Server Port: ${SERVER_PORT}`);
    logger.log('info', `Server URL: http://${SERVER_HOST}:${SERVER_PORT}`);
});