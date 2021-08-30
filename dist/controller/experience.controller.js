"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const experiences_models_1 = __importDefault(require("../models/experiences.models"));
const getExperiences = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield experiences_models_1.default.find();
});
const addExperiences = (data) => __awaiter(void 0, void 0, void 0, function* () {
    experiences_models_1.default.create(data);
    return getExperiences();
});
const updateExperiences = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield experiences_models_1.default.findOneAndUpdate({ _id: id }, { $set: data }, { new: true });
});
const deleteExperiences = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield experiences_models_1.default.deleteOne({ _id: id });
    return getExperiences();
});
exports.default = {
    getExperiences,
    addExperiences,
    updateExperiences,
    deleteExperiences
};
