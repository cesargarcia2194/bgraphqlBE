import path from 'path'
import { fileLoader, mergeResolvers} from 'merge-graphql-schemas'

const resolverArrays = fileLoader(path.join(__dirname,'./'))

export default mergeResolvers(resolverArrays, {all:true})