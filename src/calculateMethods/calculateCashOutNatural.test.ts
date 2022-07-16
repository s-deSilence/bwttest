import { OperationI } from "./../types/types";
import { parsedArr } from "./../utils/readJson.test";
import { calculateCashOutNatural } from "./calculateCashOutNatural";

const arr = parsedArr as OperationI[];

test("Test cashOut Natural", () => {
    expect(calculateCashOutNatural(arr[2], 2, arr)).toBe(87);
    expect(calculateCashOutNatural(arr[3], 3, arr)).toBe(3);
    expect(calculateCashOutNatural(arr[4], 4, arr)).toBe(0.3);
    expect(calculateCashOutNatural(arr[5], 5, arr)).toBe(0.3);
    expect(calculateCashOutNatural(arr[7], 7, arr)).toBe(0);
});
