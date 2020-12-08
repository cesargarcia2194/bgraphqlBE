import { makeExecutableSchema, ApolloServer } from 'apollo-server'

//Models
import models from './models'

//Types definitios & resolver
import typeDefs from './graphql/types'
import resolvers from './graphql/resolvers'

//Schema 
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

//server
const apolloServer = new ApolloServer({
    schema,
    context: {
        models
    }
})
//Sync
const alter = true
const force = false
models.sequelize.sync({alter, force})
    .then(() =>{
        //running apollo server
        apolloServer.listen(5000)
        .then(({url})=>console.log('Running server: '+url))
    })
