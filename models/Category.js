import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{type: String, required:true},
    ranking:{type: Number} ,
    example: [{type:String}],
    detail: {type:String, required:true},
    user_id: {type:String},
},{timestamps: true})

export const category = mongoose.model('category', categorySchema)