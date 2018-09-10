import React, { Component } from 'react';
import Catalog from './Catalog';
import CartForm from './CartForm';
import {bind, reduce} from 'lodash';
import products from '../constants/Products';

export const CartManager = React.createContext();

class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      cart: {items: []},
    };
    this.addToCart = bind(this.addToCart, this);
    this.getProducts = bind(this.getProducts, this);
    this.getCountProductsInCart = bind(this.getCountProductsInCart, this);
  }

  getProducts() {
    return this.state.cart.items;
  }

  getCountProductsInCart() {
    return reduce(this.getProducts(), (acc, item) => acc + item.quantity, 0)
  }

  addToCart(product, quantity=1) {
    const { cart: {items} } = this.state;
    let elemId = items.findIndex((elem, index, arr) => elem.id === product.id);
    if (elemId === -1) {
      items.push(Object.assign({quantity: quantity}, product));
    } else {
      items[elemId].quantity += quantity;
    }
    this.setState({ cart: {items: items} })
  }

  render() {
    return (
      <CartManager.Provider value={
        {
          addToCart: this.addToCart,
          getProducts: this.getProducts,
          getCountProductsInCart: this.getCountProductsInCart
        }
      }>
        <Catalog items={this.state.products}/>
        <CartForm/>
      </CartManager.Provider>
    )
  }
}

export default CatalogPage;
