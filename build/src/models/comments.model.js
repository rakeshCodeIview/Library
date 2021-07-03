"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
var mongoose_1 = require("mongoose");
var commentSchema = new mongoose_1.Schema({
    comment: String,
    createdAt: Date,
    articleId: mongoose_1.Schema.Types.ObjectId
});
exports.Comment = (0, mongoose_1.model)('Comment', commentSchema);
