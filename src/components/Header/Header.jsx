import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className={'App-header'}>
                <Link to={'/'}>
                    <div className={'App-header-div'}>Home</div>
                </Link>
                <Link to={'/contact'}>
                    <div className={'App-header-div'}>Contacts</div>
                </Link>
                <Link to={'/stats'}>
                    <div className={'App-header-div'}>Statistics</div>
                </Link>
            </header>
        );
    }
}

export default Header;