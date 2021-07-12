"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
var typeorm_1 = require("typeorm");
var Article = /** @class */ (function () {
    function Article() {
        this.id = 0;
        this.articleName = "";
        this.nickName = "";
        this.content = "";
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid")
    ], Article.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar', { length: 50 })
    ], Article.prototype, "articleName", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar', { length: 50 })
    ], Article.prototype, "nickName", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar', { length: 15000, nullable: true })
    ], Article.prototype, "content", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "timestamptz", default: "now()" })
    ], Article.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "timestamptz" })
    ], Article.prototype, "updatedAt", void 0);
    Article = __decorate([
        (0, typeorm_1.Entity)({ name: 'article' })
    ], Article);
    return Article;
}());
exports.Article = Article;
