import React, {Component} from 'react';
import Catalog from './Catalog';
import CartForm from './CartForm';
import {bind, merge, find} from 'lodash';

export const ProductsInCart = React.createContext([]);
export const CartManager = React.createContext();

class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      productsInCart: []
    };
    this.toCart = bind(this.toCart, this);
  }

  toCart(e, id) {
    const {items} = this.props;
    const {productsInCart} = this.state;
    let elemId = productsInCart.findIndex((elem, index, arr) => elem.id === id);
    if (elemId === -1) {
      let newProduct = find(items, {id});
      productsInCart.push(merge(newProduct, {quantity: 1}));
    } else {
      productsInCart[elemId].quantity++;
    }
    this.setState({productsInCart: productsInCart})
  }

  render() {
    return (
      <ProductsInCart.Provider value={this.state.productsInCart}>
        <CartManager.Provider value={this.toCart}>
          <Catalog items={this.state.items}/>
          <CartForm/>
        </CartManager.Provider>
      </ProductsInCart.Provider>
    )
  }
}

export default CatalogPage;
