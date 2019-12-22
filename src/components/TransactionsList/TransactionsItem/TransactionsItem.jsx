import React, {Component} from 'react';

class TransactionsItem extends Component {
    render() {
        const to = 'Haim Buzaglo';
        const at = new Date().toDateString();
        const amount = '3 coins';
        return (
            <div className='transactions-item'>
                <h5>To : {to}</h5>
                <h5>At : {at}</h5>
                <h5>To : {amount}</h5>
                <hr/>
            </div>
        );

    }
}

export default TransactionsItem;