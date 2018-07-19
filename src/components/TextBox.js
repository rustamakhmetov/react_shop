import React, { Component } from 'react';

class TextBox extends Component {
    render() {
        const { children } = this.props;
        return (
            <span>{children}</span>
        )
    }
}

export default TextBox;