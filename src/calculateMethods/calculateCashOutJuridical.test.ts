import { OperationI } from "./../types/types";
import { parsedArr } from "./../utils/readJson.test";
import { calculateCashOutJuridical } from "./calculateCashOutJuridical";
test("Test cash_out Juridical", () => {
    expect(calculateCashOutJuridical(parsedArr[1] as OperationI)).toBe(0.9);
});
