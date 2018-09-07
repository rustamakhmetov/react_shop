import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { ProductsInCart } from './CatalogPage';
import Price from './Price';

class CartForm extends Component {
  render() {
    return (
      <div>
        <Table>
          <thead>
          <tr>
            <th>#</th>
            <th>Наименование</th>
            <th>Цена</th>
            <th>Кол-во</th>
            <th>Стоимость</th>
          </tr>
          </thead>
          <tbody>
          <ProductsInCart.Consumer>
            {
              productsInCart => {
                return (
                  productsInCart.map((product, i) =>
                    <tr key={`productInCart-${product.id}`}>
                      <td>{i + 1}</td>
                      <td>{product.title}</td>
                      <td>
                        <Price price={product.price} />
                      </td>
                      <td>{product.quantity}</td>
                      <td>
                        <Price price={product.price * product.quantity} />
                      </td>
                    </tr>
                  )
                )
              }
            }
          </ProductsInCart.Consumer>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default CartForm;
