const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

var keywordsSchema = new mongoose.Schema({ 
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true,
    }

}, { timestamps: true });

module.exports = mongoose.model("Keywords", keywordsSchema);