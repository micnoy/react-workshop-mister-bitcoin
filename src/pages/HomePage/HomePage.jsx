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
            <section className="nav-page">
                {user && <h3>{user.name}</h3>}
                {user && <h3>Coins: {user.coins}</h3>}
                {rate && <h3>BTC: {rate}</h3>}
            </section>
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
