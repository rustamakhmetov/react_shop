import React, { Component } from 'react';

class Price extends Component {
    render() {
        const { price } = this.props;
        return (
            <div>Price: {price}</div>
        )
    }
}

export default Price;