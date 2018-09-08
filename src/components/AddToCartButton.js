import React, {Component} from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CartManager } from './CatalogPage';

class AddToCartButton extends Component {

  render() {
    const {product} = this.props;
    return (
      <div>
        <CartManager.Consumer>
          {
            ({addToCart}) => {
              return (
                <Button
                  color='success'
                  onClick={() => addToCart(product)}
                >
                  <span>В корзину</span>
                  <FontAwesomeIcon icon={ faCartPlus } size="1x"/>
                </Button>
              )
            }
          }
        </CartManager.Consumer>
      </div>
    )
  }
}

export default AddToCartButton;
