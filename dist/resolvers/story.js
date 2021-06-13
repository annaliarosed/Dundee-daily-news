"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryResolver = void 0;
const Story_entity_1 = require("../entities/Story.entity");
const type_graphql_1 = require("type-graphql");
const isAuth_1 = require("../middleware/isAuth");
let CreateStoryInput = class CreateStoryInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateStoryInput.prototype, "head", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CreateStoryInput.prototype, "subHead", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CreateStoryInput.prototype, "caption", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateStoryInput.prototype, "storyText", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CreateStoryInput.prototype, "category", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateStoryInput.prototype, "author", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateStoryInput.prototype, "town", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CreateStoryInput.prototype, "altText", void 0);
__decorate([
    type_graphql_1.Field(() => [String]),
    __metadata("design:type", Array)
], CreateStoryInput.prototype, "imgUrls", void 0);
CreateStoryInput = __decorate([
    type_graphql_1.InputType()
], CreateStoryInput);
let UpdateStoryInput = class UpdateStoryInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UpdateStoryInput.prototype, "head", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateStoryInput.prototype, "subHead", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateStoryInput.prototype, "caption", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UpdateStoryInput.prototype, "storyText", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateStoryInput.prototype, "category", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UpdateStoryInput.prototype, "author", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UpdateStoryInput.prototype, "town", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateStoryInput.prototype, "altText", void 0);
__decorate([
    type_graphql_1.Field(() => [String]),
    __metadata("design:type", Array)
], UpdateStoryInput.prototype, "imgUrls", void 0);
UpdateStoryInput = __decorate([
    type_graphql_1.InputType()
], UpdateStoryInput);
let FilterQueryByTown = class FilterQueryByTown {
};
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], FilterQueryByTown.prototype, "town", void 0);
FilterQueryByTown = __decorate([
    type_graphql_1.InputType()
], FilterQueryByTown);
let FilterQueryByCategory = class FilterQueryByCategory {
};
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], FilterQueryByCategory.prototype, "category", void 0);
FilterQueryByCategory = __decorate([
    type_graphql_1.InputType()
], FilterQueryByCategory);
let StoryResolver = class StoryResolver {
    stories(townFilter, categoryFilter, ctx) {
        if (townFilter) {
            return ctx.em.find(Story_entity_1.Story, Object.assign({}, townFilter));
        }
        if (categoryFilter) {
            return ctx.em.find(Story_entity_1.Story, Object.assign({}, categoryFilter));
        }
        return ctx.em.find(Story_entity_1.Story, {});
    }
    story(id, ctx) {
        return ctx.em.findOne(Story_entity_1.Story, { id });
    }
    createStory(input, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const newStory = ctx.em.create(Story_entity_1.Story, Object.assign({}, input));
            yield ctx.em.persistAndFlush(newStory);
            return newStory;
        });
    }
    updateStory(id, input, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedStory = yield ctx.em.findOne(Story_entity_1.Story, { id });
            if (!updatedStory) {
                throw new Error("Story not found!");
            }
            Object.assign(updatedStory, input);
            yield ctx.em.persistAndFlush(updatedStory);
            return updatedStory;
        });
    }
    deleteStory(id, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield ctx.em.nativeDelete(Story_entity_1.Story, { id });
            }
            catch (err) {
                return false;
            }
            return true;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Story_entity_1.Story]),
    __param(0, type_graphql_1.Arg("townFilter", () => FilterQueryByTown, { nullable: true })),
    __param(1, type_graphql_1.Arg("categoryFilter", () => FilterQueryByCategory, { nullable: true })),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterQueryByTown,
        FilterQueryByCategory, Object]),
    __metadata("design:returntype", Promise)
], StoryResolver.prototype, "stories", null);
__decorate([
    type_graphql_1.Query(() => Story_entity_1.Story, { nullable: true }),
    __param(0, type_graphql_1.Arg("id", () => Number)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], StoryResolver.prototype, "story", null);
__decorate([
    type_graphql_1.Mutation(() => Story_entity_1.Story),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Arg("input", () => CreateStoryInput)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateStoryInput, Object]),
    __metadata("design:returntype", Promise)
], StoryResolver.prototype, "createStory", null);
__decorate([
    type_graphql_1.Mutation(() => Story_entity_1.Story),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Arg("id", () => Number)),
    __param(1, type_graphql_1.Arg("input", () => UpdateStoryInput)),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateStoryInput, Object]),
    __metadata("design:returntype", Promise)
], StoryResolver.prototype, "updateStory", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Arg("id", () => Number)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], StoryResolver.prototype, "deleteStory", null);
StoryResolver = __decorate([
    type_graphql_1.Resolver()
], StoryResolver);
exports.StoryResolver = StoryResolver;
//# sourceMappingURL=story.js.map