import React from 'react';
import PropTypes from 'prop-types';

import './../CSS/App.css'

export const Lady = ({ isSara }) => {

  const lady = isSara ? 'sara' : 'lara';

  return (
    <div className={`lady ${lady}-1`} alt='sara'></div>
  )
}

Lady.propTypes = {
  isSara: PropTypes.bool,
};

Lady.defaultProps = {
  isSara: true,
};
