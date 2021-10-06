const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema({
  body: {
      type: String,
      required: true
  },
  created_at: {
      type: Date,
      default: Date.now,
      required: true
  },
  avatar_id: {
      type:String,
      required: true
  }
});

const Post = mongoose.model("posts", PostsSchema);

// const ChatterSchema = new mongoose.Schema({
//     chatter_session_id: {
//         type: String,
//         required: true
//     },
//     created_at: {
//         type: Date,
//         default: Date.now,
//         required: true
//     },
//     avatar_id: {
//         type:String,
//         required: true
//     }
// });

// const Avatars = mongoose.model("chatter", PostsSchema);

const AvatarsSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    },
    avatar_id: {
        type:String,
        required: true
    }
});
  
const Avatars = mongoose.model("avatars", PostsSchema);


module.exports = {PostModel: Post, AvatarModel: Avatars};