import { roundNumber } from "./roundNumber";

test("numbers ceiled test", () => {
    expect(roundNumber(1)).toBe(1);
    expect(roundNumber(0.000000000001)).toBe(0.01);
    expect(roundNumber(1.0022)).toBe(1.01);
    expect(roundNumber(1.995)).toBe(2);
});
