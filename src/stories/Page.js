import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import { Lady } from './Lady';

import speechBox from '../assest/speech-box.png'

import './../CSS/App.css'

export const Page = ({ office, buttonIsArrow, isSara }) => {

  return (
    <div className={`App office-${office}`}>
      <div className='slide'>
        <Lady isSara={isSara} />
        <div className='speechBox'>
          <img src={speechBox} className='sp-box' alt='speechBox' />
          <div className='speechText'>
            <div className='situation'>{ }</div>
            <div className='option-container'>
              <input name='options' type='radio' className='option' id='1' value='Hello' />
              <label for='1' type='text' className='label'>Hello</label>
            </div>
            <div className='option-container'>
              <input name='options' type='radio' className='option' id='2' value='Bonjour' />
              <label for='2' type='text' className='label'>Bonjour</label>
            </div>
          </div>
        </div>
      </div>
      <Button buttonIsArrow={buttonIsArrow} />
    </div>)

};

Page.propTypes = {
  office: PropTypes.oneOf(['1', '2', '3']),
};

Button.propTypes = {
  buttonIsArrow: PropTypes.bool,
};

Lady.propTypes = {
  isSara: PropTypes.bool,
};

Page.defaultProps = {
  office: '1',
  buttonIsArrow: true,
  isSara: true
};
