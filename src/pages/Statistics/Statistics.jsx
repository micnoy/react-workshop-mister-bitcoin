import React, {Component} from 'react';
import BitcoinService from "../../services/BitcoinService";
import Graph from "../../components/Graph/Graph";


class Statistics extends Component {

    async componentDidMount() {
        this.setState({marketPrice: await BitcoinService.getMarketPrice()});
        this.setState({confirmedTransactions: await BitcoinService.getConfirmedTransactions()});
    }

    state = {
        marketPrice: undefined,
        confirmedTransactions: undefined
    };

    render() {
        const {marketPrice, confirmedTransactions} = this.state;
        return (
            <div>
                {marketPrice && <Graph data={marketPrice}
                                       chartName='Market price (USD)'
                                       backgroundColor={'rgba(47,54,192,0.4)'}
                                       borderColor={'rgb(47,54,192,1)'}/>}
                <h4>Average USD marker price across major bitcon exchanges.</h4>

                {confirmedTransactions && <Graph data={confirmedTransactions}
                                                 chartName='Confirmed Transactions Per Day'
                                                 backgroundColor={'rgba(55,122,40,0.4)'}
                                                 borderColor={'rgb(55,122,40,1)'}/>}
                <h4>The number of daily confirmed bitcoin transactions.</h4>
            </div>
        );
    }
}

export default Statistics;