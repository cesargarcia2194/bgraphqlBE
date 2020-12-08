export default {
    Query: {
        getPosts(parent, args, {models}){
            return models.Post.findAll({
                include:[{
                    model: models.Tag,
                    as: 'tags'
                }]
            })
        }
    },
    Mutation: {
        async createPost(parent, {input}, {models}){
            return await models.Post.create({...input}, {
                include: [{
                    model: models.Tag,
                    as: 'tags'
                }]
            })
        }
    }
}