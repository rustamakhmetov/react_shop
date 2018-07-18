import React, { Component } from 'react';
import CatalogPage from './components/CatalogPage';
import items from './constants/Products';

class App extends Component {
    render() {
        return (
            <div>
                <CatalogPage items={items} />
            </div>
        )
    }
}

export default App;