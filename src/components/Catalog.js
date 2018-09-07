import React, {Component, Fragment} from 'react';
import ProductCard from './ProductCard';
import Cart from './Cart';

class Catalog extends Component {
  render() {
    const {items} = this.props;
    return (
      <Fragment>
        <Cart/>
        <ul>
          {
            items.map(item => (
              <li key={`productCard-${item.id}`}>
                <ProductCard item={item}/>
              </li>
            ))
          }
        </ul>
      </Fragment>
    );
  }
}

export default Catalog;