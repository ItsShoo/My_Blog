const { defaultMaxListeners } = require('connect-mongo')
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const PostSchema = new Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    title:{
        type: String,
        required: true
    },
    body:{
        type:String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Post", PostSchema);