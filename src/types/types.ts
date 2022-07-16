import { UserTypeEnum, OperationTypeEnum } from "./enums";

export interface OperationI{
    date: string, 
    user_id: number, 
    user_type: UserTypeEnum,
    type: OperationTypeEnum, 
    operation: { 
        amount: number,
        currency: "EUR"
    }
}

export interface CashInConfigI{
    percents: number,
    max:{
        amount: number,
        currency: "EUR"
    }
}

export interface CashOutJuridicalConfigI{
    percents: number,
    min:{
        amount: number,
        currency: "EUR"
    }
}

export interface CashOutLegalConfigI{
    percents: number,
    week_limit:{
        amount: number,
        currency: "EUR"
    }
}