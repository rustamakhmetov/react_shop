import React from 'react';
import { Input } from 'reactstrap';
import AddToCartButton from './AddToCartButton';
import { CartManager } from './CatalogPage';

class AddToCartForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {quantity: 1};
  };

  handleQuantity (e) {
    let value = parseInt(e.target.value) || 1;
    this.setState({quantity: value});
  };

  render() {
    const {product} = this.props;
    const {quantity} = this.state;
    return (
      <div>
        <Input placeholder='Кол-во' value={quantity} onChange={(e) => this.handleQuantity(e)}/>
        <CartManager.Consumer>
          {
            ({addToCart}) => {
              return (
                <AddToCartButton
                  onClick={() => addToCart(product, quantity)}
                />
              )
            }
          }
        </CartManager.Consumer>
      </div>
    )
  }
}

export default AddToCartForm;
