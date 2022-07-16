import { OperationI } from "./../types/types";
import { parsedArr } from "./readJson.test";
import { getLastCashOutOperationsByWeek } from "./getLastCashOutOperationsByWeek";

const arr = parsedArr as OperationI[];
test("getLastOperations", () => {
    expect(getLastCashOutOperationsByWeek(arr[0], 0, arr)).toStrictEqual([]);
    expect(getLastCashOutOperationsByWeek(arr[1], 1, arr)).toStrictEqual([]);
    expect(getLastCashOutOperationsByWeek(arr[2], 2, arr)).toStrictEqual([]);
});
