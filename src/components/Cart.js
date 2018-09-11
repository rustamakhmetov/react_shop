import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { reduce } from 'lodash';
import { CartManager } from './CatalogPage';

class Cart extends Component {

  render() {
    return (
      <div>
        <CartManager.Consumer>
          {
            ({getCountProductsInCart}) =>
              <span>
                {getCountProductsInCart()}
              </span>
          }
        </CartManager.Consumer>
        <FontAwesomeIcon icon={faShoppingCart} size="3x"/>
      </div>
    )
  }
}

export default Cart;
