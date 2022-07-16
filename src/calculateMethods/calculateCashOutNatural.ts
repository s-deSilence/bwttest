import { multiplySumAndPercents } from "../utils/multiplySumAndPercents";
import { roundNumber } from "../utils/roundNumber";
import { cashOutLegal as conf } from "../configs";
import { getLastCashOutOperationsByWeek } from "../utils/getLastCashOutOperationsByWeek";
import { OperationI } from "../types/types";

/*
    As first, I received all cashouts operation by week by specified user
    Next, I received total sum of all cashouts
    If free limit less than this sum
    we calculate commision from full operation sum
    else we compare operation sum and limit and
    if sum larger than limit we calculate commission fee from difference
    else return 0, because its free
*/

export const calculateCashOutNatural = (
    operation: OperationI,
    index: number,
    allOperations: OperationI[]
): number => {
    const operationsPerWeek = getLastCashOutOperationsByWeek(
        operation,
        index,
        allOperations
    );
    const cashOutsPerWeek = operationsPerWeek.reduce(
        (acc, op) => acc + op.operation.amount,
        0
    );

    if (cashOutsPerWeek > conf.week_limit.amount) {
        return roundNumber(
            multiplySumAndPercents(conf.percents, operation.operation.amount)
        );
    } else {
        if (
            operation.operation.amount >
            conf.week_limit.amount - cashOutsPerWeek
        ) {
            const overflowSum =
                operation.operation.amount -
                (conf.week_limit.amount + cashOutsPerWeek);
            return roundNumber(
                multiplySumAndPercents(conf.percents, overflowSum)
            );
        } else {
            return 0;
        }
    }
};
