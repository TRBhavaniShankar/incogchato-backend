const express = require("express");
const {PostModel, AvatarModel} = require("./models");
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(cors())

app.get('/', (req, res) => {
    // create a new chatter
    const newChatter = uuidv4()

    if (global.writer === null) {
        global.writer = newChatter
    }

    console.log(global.writer)

    res.send({
        "sessionid": newChatter
    })
})

app.post('/start', async (req, res) => {

})

app.get('/post/:id', async (req, res) => {

})

app.post('/post', async (req, res) => {
    new PostModel({body : req.body.body, avatar_id: req.body.avatar_id}).save(function (err, result) {
        res.send(result)
    })
})

app.get('/posts', async (req, res) => {
    try {

        let sort = 1
        if (req.query.sort == "DESC") {
            sort = -1
        }
        const post = await PostModel.find().sort({created_at: sort});
        res.send(post);
        // res.send(data)
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = app;