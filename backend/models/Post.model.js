import mongoose from 'mongoose'
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required:true
    },
    image: {
        type: String,
        required:true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})
export const Post = mongoose.model("Post",postSchema)