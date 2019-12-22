import React, {Component} from 'react';

class HeaderItem extends Component {
    render() {

        const {icon, text} = this.props;
        return (
            <div className='header-item'>
                <img src={icon} alt=''/>
                <div className={'header-item-text'}>{text}</div>
            </div>
        );
    }
}

export default HeaderItem;