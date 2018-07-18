import React, { Component } from 'react';
import ProductCard from './components/ProductCard';
import items from './constants/Products';

class App extends Component {
    render() {
        return (
            <div>
                <ProductCard item={items[0]} />
                <ProductCard item={items[1]} />
                <ProductCard item={items[2]} />
            </div>
        )
    }
}

export default App;