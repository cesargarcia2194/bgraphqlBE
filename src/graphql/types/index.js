import path from 'path'
import { fileLoader, mergeTypes} from 'merge-graphql-schemas'

const typeArrays = fileLoader(path.join(__dirname,'./'))

export default mergeTypes(typeArrays, {all:true})