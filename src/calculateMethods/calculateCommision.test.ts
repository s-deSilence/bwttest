import { OperationI } from "./../types/types";
import { parsedArr } from "./../utils/readJson.test";
import { calculateCommission } from "./calculateCommision";

const arr = parsedArr as OperationI[];

test("Test commision", () => {
    expect(calculateCommission(arr[0], 0, arr)).toBe(0.06);
    expect(calculateCommission(arr[1], 1, arr)).toBe(0.9);
    expect(calculateCommission(arr[2], 2, arr)).toBe(87);
    expect(calculateCommission(arr[3], 3, arr)).toBe(3);
    expect(calculateCommission(arr[4], 4, arr)).toBe(0.3);
    expect(calculateCommission(arr[5], 5, arr)).toBe(0.3);
    expect(calculateCommission(arr[6], 6, arr)).toBe(5);
    expect(calculateCommission(arr[7], 7, arr)).toBe(0);
    expect(calculateCommission(arr[8], 8, arr)).toBe(0);
});
