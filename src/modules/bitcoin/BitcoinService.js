const axios = require('axios');

export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions,
}

async function getRate() {
    const rate = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1');
    return rate.data;
}

async function getMarketPrice() {
    const rate = await axios.get('https://api.blockchain.info/charts/market-price?timespan=6months&format=json&cors=true');
    return rate.data.values;
}


async function getConfirmedTransactions() {
    const transactions = await axios.get('https://api.blockchain.info/charts/n-transactions?timespan=6months&format=json&cors=true');
    return transactions.data.values;
}