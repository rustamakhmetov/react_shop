import React, {Component} from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

class AddToCartButton extends Component {

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <Button
          color='success'
          onClick={ onClick }
        >
          <span>В корзину</span>
          <FontAwesomeIcon icon={ faCartPlus } size="1x"/>
        </Button>
      </div>
    )
  }
}

export default AddToCartButton;
