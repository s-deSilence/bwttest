import { calculateCommission } from "./calculateMethods/calculateCommision";
import { readJson } from "./utils/readJson";

export const mainFunction = async (filePath: string) => {
    try {
        const operationsArr = readJson(filePath);

        operationsArr.forEach((o, i) => {
            /*
                I didn't know about 2 decimals, so, I added them here for beatiful console ^-^
            */
            const commissionSum = calculateCommission(
                o,
                i,
                operationsArr
            ).toFixed(2);
            console.log(commissionSum);
        });
    } catch (e) {
        console.log(e);
    }
};
