import { doLogin } from '../../utils/auth'
export default {
    Query: {
        getUsers: (parent, args, {models})=>{
            return models.User.findAll({
                include: [{
                    model: models.Post,
                    as: 'posts',
                    include: [{
                        model: models.Tag,
                        as: 'tags'
                    }]
                }]
            })
       }
    },
    Mutation: {
        async createUser(parent, {input}, {models}){
            return await models.User.create({...input})
        },
        login: (parent, {input:{email, password}},{models}) => doLogin(email,password,models)
    }
}