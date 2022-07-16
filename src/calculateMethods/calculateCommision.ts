import { calculateCashOutNatural } from "./calculateCashOutNatural";
import { calculateCashIn } from "./calculateCashIn";
import { OperationTypeEnum, UserTypeEnum } from "../types/enums";
import { OperationI } from "../types/types";
import { calculateCashOutJuridical } from "./calculateCashOutJuridical";

/*
    I wrote method for every case of user types and operation types
*/

export const calculateCommission = (
    operation: OperationI,
    idx: number,
    allOperations: OperationI[]
): number => {
    if (operation.type === OperationTypeEnum.CASH_IN) {
        return calculateCashIn(operation);
    } else if (operation.type === OperationTypeEnum.CASH_OUT) {
        if (operation.user_type === UserTypeEnum.JURIDICAL) {
            return calculateCashOutJuridical(operation);
        } else if (operation.user_type === UserTypeEnum.NATURAL) {
            return calculateCashOutNatural(operation, idx, allOperations);
        } else {
            throw new Error("Type of user is not correct!");
        }
    } else {
        throw new Error("Type of operations is not correct!");
    }
};
