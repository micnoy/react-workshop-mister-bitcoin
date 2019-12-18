import React, {Component} from 'react';
import {connect} from 'react-redux'

import {loadBitcoinRate} from "../../modules/bitcoin/actions";
import {loadUser} from "../../modules/user/actions";

class HomePage extends Component {

    componentDidMount() {
        this.props.loadBitcoinRate();
        this.props.loadUser();
    }

    render() {
        const {user, rate} = this.props;
        return (
            <div>
                {user && <h1>Hello {user.name} !</h1>}
                {user && <h2>Coins: {user.coins}</h2>}
                {rate && <h2>BTC: {rate}</h2>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        rate: state.bitcoinStore.rate,
        user: state.userStore.user
    };
};

const mapDispatchToProps = {
    loadBitcoinRate,
    loadUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);