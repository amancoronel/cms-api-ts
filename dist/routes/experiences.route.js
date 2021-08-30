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
const experience_controller_1 = __importDefault(require("../controller/experience.controller"));
const ExperiencesRoute = (router) => {
    router.get('/getExperience', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield experience_controller_1.default.getExperiences();
            res.status(200).json({ result: data });
        }
        catch (e) {
            res.status(400).json({ result: e });
        }
    }));
    router.post('/addExperience', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log("(( req", req.body);
            const data = yield experience_controller_1.default.addExperiences(req.body);
            res.status(200).json({ result: data });
        }
        catch (e) {
            res.status(400).json({ result: e });
        }
    }));
    router.put('/updateExperience/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield experience_controller_1.default.updateExperiences(req.params.id, req.body);
            res.status(200).json({ result: data });
        }
        catch (e) {
            res.status(400).json({ result: e });
        }
    }));
    router.delete('/deleteExperience/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield experience_controller_1.default.deleteExperiences(req.params.id);
            res.status(200).json({ result: data });
        }
        catch (e) {
            res.status(400).json({ result: e });
        }
    }));
};
exports.default = ExperiencesRoute;
