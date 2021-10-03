const express = require("express");
const {PostModel, AvatarModel} = require("./models");
const app = express();

app.get('/', (req, res) => {
    res.send("Hello world")
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
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = app;