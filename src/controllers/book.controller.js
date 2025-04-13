import { Book } from "../models/book.model.js";
import { asyncHandler } from "../utils/asynchandler.js";
import {ApiError} from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const sellBook = asyncHandler(async (req,res) => {
    const {bookname, category, author, description} = req.body;
    if([bookname, category, author, description].some((field) => field ?.trim() ==="")) {
        throw new ApiError(400, "All fields are required")
    }
    const existedBook = await Book.findOne({bookname})
    if(existedBook) {
        
    }
})