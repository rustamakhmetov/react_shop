import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = { count: this.props.count }
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <span>{ count }</span>
                <FontAwesomeIcon icon={ faShoppingCart }  size="3x"/>
            </div>
        )
    }
}

Cart.defaultProps = {
    count: 0
};

Cart.propTypes = {
    count: PropTypes.number,
};

export default Cart;
