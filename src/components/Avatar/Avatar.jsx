import React, {Component} from 'react';

class Avatar extends Component {
    render() {
        const {contact} = this.props;
        const contactImage = 'https://robohash.org/' + contact._id;
        return (
            <div>
                <img className={'avatar'} src={contactImage} alt=''/>
            </div>
        );
    }
}

export default Avatar;