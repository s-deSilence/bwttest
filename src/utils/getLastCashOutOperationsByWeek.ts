import { getStartOfWeek } from "./getStartOfWeek";
import { OperationTypeEnum } from "../types/enums";
import { OperationI } from "../types/types";

/*
    As first I did slice for decreasing arr length
    Next, I filter array by user, operation and date
*/

export const getLastCashOutOperationsByWeek = (
    operation: OperationI,
    currentIndex: number,
    operations: OperationI[]
): OperationI[] => {
    const startOfWeek = getStartOfWeek(new Date(operation.date));

    return operations
        .slice(0, currentIndex)
        .filter(
            (op) =>
                op.user_id === operation.user_id &&
                op.type === OperationTypeEnum.CASH_OUT &&
                new Date(op.date) <= new Date(operation.date) &&
                new Date(op.date) > startOfWeek
        );
};
