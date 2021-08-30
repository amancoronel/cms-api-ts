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
const userDetails_models_1 = __importDefault(require("../models/userDetails.models"));
const getUserDetails = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield userDetails_models_1.default.find();
});
const addUserDetails = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield userDetails_models_1.default.create(data);
});
const updateUserDetails = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield userDetails_models_1.default.findOneAndUpdate({ _id: id }, { $set: data }, { new: true });
});
const getSingleUserDetails = (username) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        userDetails_models_1.default.find({ username }, (err, data) => {
            if (!err)
                resolve(data[0]);
            else
                reject(err);
        });
    });
});
exports.default = {
    getUserDetails,
    updateUserDetails,
    addUserDetails,
    getSingleUserDetails
};
