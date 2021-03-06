"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Yup = __importStar(require("yup"));
var postArticleSchema = Yup.object().shape({
    nickName: Yup.string().required(),
    articleName: Yup.string().required(),
    content: Yup.string().min(10).max(500).required()
});
var GetId = Yup.object().shape({
    id: Yup.string().trim().length(24).required()
});
var GetPage = Yup.object().shape({
    page: Yup.string().trim().max(5).required()
});
module.exports = {
    postArticleSchema: postArticleSchema,
    GetId: GetId,
    GetPage: GetPage
};
