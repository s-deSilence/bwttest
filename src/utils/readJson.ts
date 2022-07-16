import { OperationI } from "../types/types";
import { readFileSync } from "fs";

export const readJson = (filePath: string): OperationI[] => {
    try {
        const data: OperationI[] = JSON.parse(
            readFileSync(filePath).toString()
        );
        return data;
    } catch (e) {
        console.log(e);
    }
};
