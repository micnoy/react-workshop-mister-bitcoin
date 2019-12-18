import React, {Component} from 'react';
import Graph from "../../components/Graph/Graph";
import {connect} from "react-redux";
import {loadConfirmedTransactions, loadMarketPrice} from "../../modules/bitcoin/actions";


class Statistics extends Component {

    componentDidMount() {
        this.props.loadMarketPrice();
        this.props.loadConfirmedTransactions();
    }

    render() {
        const {marketPrice, confirmedTransactions} = this.props;
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

const mapStateToProps = (state) => {
    return {
        marketPrice: state.bitcoinStore.marketPrice,
        confirmedTransactions: state.bitcoinStore.confirmedTransactions
    }
};

const mapDispatchToProps = {
    loadMarketPrice,
    loadConfirmedTransactions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Statistics)