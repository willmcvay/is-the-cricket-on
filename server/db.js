// @flow

import Sequelize from 'sequelize'
import { DB_CONFIG, HOST_NAME } from '../shared/env'

const { dbName, userName, password } = DB_CONFIG

export const dbInitialise = () =>
	new Sequelize(dbName, userName, password, {
		host: HOST_NAME,
		dialect: 'postgres',
		operatorsAliases: false,
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		}
	})
		.authenticate()
		.then(() => {
			console.log('SQL DB Connected')
		})
		.catch((err) => {
			console.error('SQL DB Error: ', err)
		})
