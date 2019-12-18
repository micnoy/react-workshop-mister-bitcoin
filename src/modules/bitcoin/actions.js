import BitcoinService from "./BitcoinService";


const setBitcoinRate = (rate) => {
    return {type: 'SET_BITCOIN_RATE', rate: rate}
};

export const loadBitcoinRate = () => {
    return async (dispatch) => {
        const rate = await BitcoinService.getRate();
        return dispatch(setBitcoinRate(rate))
    }
};

const setMarketPrice = (marketPrice) => {
    return {type: 'SET_MARKET_PRICE', marketPrice: marketPrice}
};

export const loadMarketPrice = () => {
    return async (dispatch) => {
        const marketPrice = await BitcoinService.getMarketPrice();
        return dispatch(setMarketPrice(marketPrice));
    }
};

const setConfirmedTransactions = (confirmedTransactions) => {
    return {type: 'SET_CONFIRMED_TRANSACTIONS', confirmedTransactions: confirmedTransactions}
};

export const loadConfirmedTransactions = () => {
    return async (dispatch) => {
        const confirmedTransactions = await BitcoinService.getConfirmedTransactions();
        return dispatch(setConfirmedTransactions(confirmedTransactions));
    }
};