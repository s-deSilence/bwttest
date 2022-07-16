import { OperationI } from "./../types/types";
import { parsedArr } from "./../utils/readJson.test";
import { calculateCashIn } from "./calculateCashIn";

test("Test cashIn", () => {
    expect(calculateCashIn(parsedArr[0] as OperationI)).toBe(0.06);
    expect(calculateCashIn(parsedArr[6] as OperationI)).toBe(5);
});
