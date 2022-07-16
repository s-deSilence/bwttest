import { multiplySumAndPercents } from "./multiplySumAndPercents";

test("multiply percents and sum", () => {
    expect(multiplySumAndPercents(5, 100)).toBe(5);
    expect(multiplySumAndPercents(0.05, 100)).toBe(0.05);
    expect(multiplySumAndPercents(0.03, 200)).toBe(0.06);
});
