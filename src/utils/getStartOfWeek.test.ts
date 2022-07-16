import { getStartOfWeek } from "./getStartOfWeek";
test("Test start of week", () => {
    expect(getStartOfWeek(new Date("2022-07-16"))).toStrictEqual(
        new Date("2022-07-11")
    );
});
