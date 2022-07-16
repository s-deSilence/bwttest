/*
    it is method for ceiling to up value on 2 decimals
*/

export const roundNumber = (value: number): number => {
    return Math.ceil(value * 100) / 100;
};
