import React, { Component } from 'react';
import Catalog from './Catalog';

class CatalogPage extends Component {
    constructor(props) {
        super(props);
        this.state = { items: props.items };
    }
    render() {
        return <Catalog items={this.state.items}/>;
    }
}

export default CatalogPage;