import React, {Component} from 'react';
import UserService from "../../services/UserService";
import BitcoinService from "../../services/BitcoinService";

class HomePage extends Component {

    async componentDidMount() {
        this.setState({rate: await BitcoinService.getRate()});
        this.setState({user: UserService.getUser()});
    }

    state = {
        rate: '',
        user: undefined
    };

    render() {
        const {user, rate} = this.state;
        return (
            <div>
                {user && <h1>Hello {user.name} !</h1>}
                {user && <h2>Coins: {user.coins}</h2>}
                {rate && <h2>BTC: {rate}</h2>}
            </div>
        );
    }
}

export default HomePage;