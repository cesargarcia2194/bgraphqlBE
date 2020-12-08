import  {Sequelize} from 'sequelize'
const fs = require('fs')
const path = require('path')

//Configuration
import {$db} from '../../config'

// DB connection

const { database, username, password, dialect} = $db()

const basename = path.basename(__filename)
const sequelize = new Sequelize(database, username, password, {
    dialect,
    define: {
        underscored: true
    }
})
// Models
let models = {}
fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
        console.log(path.join(__dirname, file))
        const model = sequelize.import(path.join(__dirname, file))
        models[model.name] = model
  })

Object.keys(models).forEach(modelName => {
    if('associate' in models[modelName]){
        models[modelName].associate(models)
    }
})

models.sequelize = sequelize

export default models