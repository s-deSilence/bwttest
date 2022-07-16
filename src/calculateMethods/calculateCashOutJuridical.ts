import { OperationI } from "../types/types";
import { cashOutJuridical as conf } from "../configs";
import { multiplySumAndPercents } from "../utils/multiplySumAndPercents";
import { roundNumber } from "../utils/roundNumber";

/*
    Mthod returns max value of minimum commision amount or part of cashout
*/

export const calculateCashOutJuridical = ({
    operation,
}: OperationI): number => {
    return roundNumber(
        Math.max(
            conf.min.amount,
            multiplySumAndPercents(conf.percents, operation.amount)
        )
    );
};
