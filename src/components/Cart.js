import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { reduce } from 'lodash';
import { ProductsInCart } from './CatalogPage';

class Cart extends Component {

  render() {
    return (
      <div>
        <ProductsInCart.Consumer>
          {
            productsInCart => {
              return (
                <span>
                  {reduce(productsInCart, function (acc, item) {
                    return acc + item.quantity
                  }, 0)}
                </span>
              )
            }
          }
        </ProductsInCart.Consumer>
        <FontAwesomeIcon icon={faShoppingCart} size="3x"/>
      </div>
    )
  }
}

export default Cart;
