//Configuration
import config from './config.json'
const enviroment = process.env.NODE_ENV || 'development'
import conf2 from './config2'
const cf = conf2[enviroment]

export const $db = () => cf.db
export const $security = () => cf.security
export const $serverPort = () => cf.serverPort