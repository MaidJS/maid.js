// fileUtils.ts
import * as fs from 'fs';

export function cleanDirectory(path: string): void {
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
            } else {
                fs.unlinkSync(filePath);
            }
        }
        fs.rmdirSync(path);
    } catch (error) {
        console.error(`Error cleaning directory at ${path}: ${error}`);
    }
}

export function copyFile(source: string, destination: string): void {
    try {
        if (!fs.existsSync(source)) {
            console.error(`Error: Source file at ${source} does not exist.`);
            return;
        }

        fs.copyFileSync(source, destination);
    } catch (error) {
        console.error(`Error copying file from ${source} to ${destination}: ${error}`);
    }
}

export function createDirectory(path: string): void {
    try {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        } else {
            console.error(`Error: Directory at ${path} already exists.`);
        }
    } catch (error) {
        console.error(`Error creating directory at ${path}: ${error}`);
    }
}

export function deleteDirectory(path: string): void {
    try {
        if (!fs.existsSync(path)) {
            console.error(`Error: Directory at ${path} does not exist.`);
            return;
        }

        cleanDirectory(path);
    } catch (error) {
        console.error(`Error deleting directory at ${path}: ${error}`);
    }
}
