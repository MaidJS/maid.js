"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.deleteDirectory = exports.createDirectory = exports.copyFile = exports.cleanDirectory = void 0;
// fileUtils.ts
const fs = __importStar(require("fs"));
function cleanDirectory(path) {
    try {
        if (!fs.existsSync(path)) {
            console.error(`Error: Directory at ${path} does not exist.`);
            return;
        }
        const files = fs.readdirSync(path);
        for (const file of files) {
            const filePath = `${path}/${file}`;
            if (fs.lstatSync(filePath).isDirectory()) {
                cleanDirectory(filePath);
            }
            else {
                fs.unlinkSync(filePath);
            }
        }
        fs.rmdirSync(path);
    }
    catch (error) {
        console.error(`Error cleaning directory at ${path}: ${error}`);
    }
}
exports.cleanDirectory = cleanDirectory;
function copyFile(source, destination) {
    try {
        if (!fs.existsSync(source)) {
            console.error(`Error: Source file at ${source} does not exist.`);
            return;
        }
        fs.copyFileSync(source, destination);
    }
    catch (error) {
        console.error(`Error copying file from ${source} to ${destination}: ${error}`);
    }
}
exports.copyFile = copyFile;
function createDirectory(path) {
    try {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
        else {
            console.error(`Error: Directory at ${path} already exists.`);
        }
    }
    catch (error) {
        console.error(`Error creating directory at ${path}: ${error}`);
    }
}
exports.createDirectory = createDirectory;
function deleteDirectory(path) {
    try {
        if (!fs.existsSync(path)) {
            console.error(`Error: Directory at ${path} does not exist.`);
            return;
        }
        cleanDirectory(path);
    }
    catch (error) {
        console.error(`Error deleting directory at ${path}: ${error}`);
    }
}
exports.deleteDirectory = deleteDirectory;
