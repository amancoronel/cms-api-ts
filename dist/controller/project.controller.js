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
const projects_models_1 = __importDefault(require("../models/projects.models"));
const getProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield projects_models_1.default.find();
});
const addProjects = (data) => __awaiter(void 0, void 0, void 0, function* () {
    projects_models_1.default.create(data);
    return getProjects();
});
const updateProjects = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield projects_models_1.default.findOneAndUpdate({ _id: id }, { $set: data }, { new: true });
});
const deleteProjects = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield projects_models_1.default.deleteOne({ _id: id });
    return getProjects();
});
exports.default = {
    getProjects,
    addProjects,
    updateProjects,
    deleteProjects
};
