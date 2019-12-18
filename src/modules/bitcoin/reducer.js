const INITIAL_STATE = {
    rate: null,
    marketPrice: null,
    confirmedTransactions: null
};

export default function bitcoinReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_BITCOIN_RATE':
            return {
                ...state,
                rate: action.rate
            };
        case 'SET_MARKET_PRICE':
            return {
                ...state,
                marketPrice: action.marketPrice
            };
        case 'SET_CONFIRMED_TRANSACTIONS':
            return {
                ...state,
                confirmedTransactions: action.confirmedTransactions
            };
        default:
            return state;
    }
}