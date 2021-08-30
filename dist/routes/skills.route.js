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
const skill_controller_1 = __importDefault(require("../controller/skill.controller"));
const SkillsRoute = (router) => {
    router.get('/getSkill', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield skill_controller_1.default.getSkills();
            res.status(200).json({ result: data });
        }
        catch (e) {
            res.status(400).json({ result: e });
        }
    }));
    router.post('/addSkill', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield skill_controller_1.default.addSkills(req.body);
            res.status(200).json({ result: data });
        }
        catch (e) {
            res.status(400).json({ result: e });
        }
    }));
    router.put('/updateSkill/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield skill_controller_1.default.updateSkills(req.params.id, req.body);
            res.status(200).json({ result: data });
        }
        catch (e) {
            res.status(400).json({ result: e });
        }
    }));
    router.delete('/deleteSkill/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield skill_controller_1.default.deleteSkills(req.params.id);
            res.status(200).json({ result: data });
        }
        catch (e) {
            res.status(400).json({ result: e });
        }
    }));
};
exports.default = SkillsRoute;
