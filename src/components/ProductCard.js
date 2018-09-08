import React, {Component} from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import AddToCartButton from './AddToCartButton';

class ProductCard extends Component {
  render() {
    const {item} = this.props;
    return (
      <div key={item.id}>
        <TextBox>
          {item.title}
        </TextBox>
        <Image src={item.imageUrl} width='100' height='100' alt={item.title}/>
        <Price label>
          {item.price}
        </Price>
        <AddToCartButton product={item} />
      </div>
    )
  }
}

export default ProductCard;
