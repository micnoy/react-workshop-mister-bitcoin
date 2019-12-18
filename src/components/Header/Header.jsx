import React from 'react';
import {Link} from "react-router-dom";
import homeIcon from '../../assets/ic-home.svg'
import statisticsIcon from '../../assets/ic-statistics.svg'
import contactsIcon from '../../assets/ic-contacts.svg'

const Header = () => {
    return (
        <header className={'App-header'}>
            <Link to={'/'}>
                {/*<div className={'App-header-div'}>Home</div>*/}
                <img className={'headerNav'} src={homeIcon} alt=''/>
            </Link>
            <Link to={'/contact'}>
                {/*<div className={'App-header-div'}>Contacts</div>*/}
                <img className={'headerNav'} src={contactsIcon} alt=''/>
            </Link>
            <Link to={'/stats'}>
                {/*<div className={'App-header-div'}>Statistics</div>*/}
                <img className={'headerNav'} src={statisticsIcon} alt=''/>
            </Link>
        </header>
    );
};

export default Header;