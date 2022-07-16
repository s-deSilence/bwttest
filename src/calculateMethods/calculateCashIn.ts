import { OperationI } from "../types/types";
import { cashIn } from "../configs";
import { roundNumber } from "../utils/roundNumber";
import { multiplySumAndPercents } from "../utils/multiplySumAndPercents";

/*
    This method returns min value of min default commission or commission fee from operation
*/

export const calculateCashIn = ({ operation }: OperationI): number => {
    const commisionSum = roundNumber(
        Math.min(
            multiplySumAndPercents(cashIn.percents, operation.amount),
            cashIn.max.amount
        )
    );

    return commisionSum;
};
