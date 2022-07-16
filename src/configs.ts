import {
    CashOutLegalConfigI,
    CashOutJuridicalConfigI,
    CashInConfigI,
} from "./types/types";

/*
    I posted the configs here, because they most likely need to be pulled from database, well, I think so, its easy to import.
    It was possible through env, but I did not do that.
*/

export const cashIn: CashInConfigI = {
    percents: 0.03,
    max: { amount: 5, currency: "EUR" },
};
export const cashOutJuridical: CashOutJuridicalConfigI = {
    percents: 0.3,
    min: { amount: 0.5, currency: "EUR" },
};
export const cashOutLegal: CashOutLegalConfigI = {
    percents: 0.3,
    week_limit: { amount: 1000, currency: "EUR" },
};
