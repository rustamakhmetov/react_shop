import React, { Component } from 'react';
import Catalog from './components/Catalog';
import items from './constants/Products';

class App extends Component {
    render() {
        return (
            <div>
                <Catalog items={items} />
            </div>
        )
    }
}

export default App;