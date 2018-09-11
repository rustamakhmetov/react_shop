import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { CartManager } from './CatalogPage';
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
          <CartManager.Consumer>
            {
              ({getProducts}) => {
                return (
                  getProducts().map((product, i) =>
                    <tr key={`productInCart-${product.id}`}>
                      <td>{i + 1}</td>
                      <td>{product.title}</td>
                      <td>
                        <Price>
                          {product.price}
                        </Price>
                      </td>
                      <td>{product.quantity}</td>
                      <td>
                        <Price>
                          {product.price * product.quantity}
                        </Price>
                      </td>
                    </tr>
                  )
                )
              }
            }
          </CartManager.Consumer>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default CartForm;
