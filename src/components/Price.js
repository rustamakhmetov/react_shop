import React, { Component } from 'react';

class Price extends Component {

  render() {
    const { price, label } = this.props;
    return (
      <div>{label ? 'Price: ' : ''}{price}</div>
    )
  }
}

Price.defaultProps = {
  label: false
};

export default Price;
