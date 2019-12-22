import React, {Component} from 'react';
import TransactionsItem from "./TransactionsItem/TransactionsItem";

class TransactionsList extends Component {

    render() {
        const title = "Your last 3 moves";
        return (
            <section className='transactions-list'>
                <h3>{title}</h3>
                <ul className='transactions-list ul'>
                    <li><TransactionsItem/></li>
                    <li><TransactionsItem/></li>
                    <li><TransactionsItem/></li>
                    <li><TransactionsItem/></li>
                </ul>
            </section>
        );
    }
}

export default TransactionsList;