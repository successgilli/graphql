import express from 'express'

import { graphqlHTTP } from 'express-graphql'

import { schema } from './data/schema'

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))

app.get('/', (req, res) => {
    res.send('graphql is ammazing')
})

const PORT = 8081

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
