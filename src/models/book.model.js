import mongoose, {Schema} from "mongoose"

const bookSchema = new Schema({
    bookname: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String
    },
    category: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        Type: Number,
        required: true
    },
    count: {
        Type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: User 
    },
},{timestamps: true})

export const Book = mongoose.model("Book", bookSchema)