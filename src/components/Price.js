import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Price extends Component {

  render() {
    const { children, label } = this.props;
    return (
      <div>{label ? 'Price: ' : ''}{children}</div>
    )
  }
}

Price.propTypes = {
  children: PropTypes.number,
};

Price.defaultProps = {
  children: 0,
  label: false
};

export default Price;
