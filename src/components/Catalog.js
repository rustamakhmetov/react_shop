import React, { Component } from 'react';
import ProductCard from './ProductCard';

class Catalog extends Component {
    render() {
        const { items } = this.props;
        return (
            <ul>
                {
                    items.map(item => (
                        <li key={`productCard-${item.id}`}>
                            <ProductCard item={item} />
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default Catalog;