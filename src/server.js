const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const { buildSchema } = require('graphql')
const mongoose = require('mongoose')

const app = express()

const users = []

app.use(bodyParser.json())

app.use(
    'graphql',
    graphqlHttp({
        schema: buildSchema(`
        type User {
            _id: ID!
            username: string!
            password: string!
        }
        `)
    })
)

mongoose.connect(`mongodb+srv://{$process.env.MONGO_USER}:{$procss.env.MONGO_PASSWORD}@cluster0.krxqu.mongodb.net/<dbname>?retryWrites=true&w=majority`).then(() => {
    app.listen(3000)
}).catch(err => {
    console.log(err)
})