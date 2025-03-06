"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const concise_haven_450204_m1_firebase_adminsdk_fbsvc_486ce0bc1d_json_1 = __importDefault(require("./credentials/concise-haven-450204-m1-firebase-adminsdk-fbsvc-486ce0bc1d.json"));
exports.app = firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(concise_haven_450204_m1_firebase_adminsdk_fbsvc_486ce0bc1d_json_1.default),
});
