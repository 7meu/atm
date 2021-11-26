export enum MoneyType {
    Note = 0,
    BigCoin = 1,
    SmallCoin = 2
}

export const moneyTypes = [[1000, MoneyType.Note],
                           [500, MoneyType.Note],
                           [200, MoneyType.Note],
                           [100, MoneyType.Note],
                           [50, MoneyType.Note],
                           [20, MoneyType.BigCoin],
                           [10, MoneyType.SmallCoin],
                           [5, MoneyType.BigCoin],
                           [2, MoneyType.BigCoin],
                           [1, MoneyType.SmallCoin]];