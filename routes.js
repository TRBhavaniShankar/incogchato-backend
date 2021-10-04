const express = require("express");
const {PostModel, AvatarModel} = require("./models");
var cors = require('cors')
const app = express();

const data = [
    {
        "_id": "61594c60b362a72fcc3d39ee",
        "body": "this is test 4",
        "avatar_id": "4",
        "created_at": "2021-10-03T06:23:28.676Z",
        "__v": 0
    },
    {
        "_id": "61594a664a5c82030ccdac76",
        "body": "this is test 1",
        "avatar_id": "3",
        "created_at": "2021-10-03T06:15:02.015Z",
        "__v": 0
    },
    {
        "_id": "6159478e22144acffa188e9a",
        "body": "this is test",
        "avatar_id": "2",
        "created_at": "2021-10-03T06:02:55.003Z",
        "__v": 0
    },
    {
        "_id": "6159463b3dbffdab684f13ab",
        "body": "test",
        "avatar_id": "test/1",
        "created_at": "2021-10-03T05:57:15.442Z",
        "__v": 0
    },
    {
        "_id": "61591bc7c29cf456abd95d89",
        "body": "hellow world!!",
        "created_at": "2021-10-02T18:30:00.000Z"
    }
]

app.use(cors())

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
        // res.send(data)
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = app;