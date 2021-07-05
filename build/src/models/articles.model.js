"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
var mongoose_1 = require("mongoose");
var articleSchema = new mongoose_1.Schema({
    articleName: String,
    nickName: String,
    createdAt: Date,
    content: String
});
exports.Article = (0, mongoose_1.model)('Article', articleSchema);
