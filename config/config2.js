require('dotenv').config()
export default {
    development: {
        serverPort: process.env.SERVER_PORT,
        db: {
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT
        },
        security: {
            secretKey: process.env.SECRET_KEY,
            expiresIn: process.env.EXPIRES_IN
        }
        
    },
    test: {
        
    }
}