import React from 'react';
import PropTypes from 'prop-types';

import './../CSS/App.css'


/**
 * Primary UI component for user interaction
 */
export const Button = ({ buttonIsArrow, ...props }) => {

  const mode = buttonIsArrow ? `Reset arrow` : `Reset text`;

  // const [state, dispatch] = useStateValue();

  // const hundleClick = e => {
  //   dispatch(setOption(e.target.value));
  //   return state;
  // }

  return (
    <div>
      <div className={mode} alt='reset' title='Reset' value='' {...props} />
    </div>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  buttonIsArrow: PropTypes.bool,
  /**
   * What background color to use
   */
  // backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  // size: PropTypes.oneOf(['small', 'medium', 'large']),
  // /**
  //  * Button contents
  //  */
  // label: PropTypes.string.isRequired,
  // /**
  //  * Optional click handler
  //  */
  // onClick: PropTypes.func,
};

Button.defaultProps = {
  buttonIsArrow: true,
};
