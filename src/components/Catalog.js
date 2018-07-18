import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import ProductCard from './ProductCard';

class Catalog extends Component {
    render() {
        const { items } = this.props;
        return (
            <ul>
                {
                    items.map(item => (
                        <li key={uniqueId()}>
                            <ProductCard item={item} />
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default Catalog;