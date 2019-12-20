import React from 'react';
import {Link} from "react-router-dom";
import homeIcon from '../../assets/ic-home.svg'
import statisticsIcon from '../../assets/ic-statistics.svg'
import contactsIcon from '../../assets/ic-contacts.svg'
import HeaderItem from "../HeaderItem/HeaderItem";

const Header = () => {
    return (
        <header>
            <Link to={'/'}>
                <HeaderItem text='Home' icon={homeIcon}/>
            </Link>
            <Link to={'/contact'}>
                <HeaderItem text='Contacts' icon={contactsIcon}/>
            </Link>
            <Link to={'/stats'}>
                <HeaderItem text='Statistics' icon={statisticsIcon}/>
            </Link>
        </header>
    );
};

export default Header;