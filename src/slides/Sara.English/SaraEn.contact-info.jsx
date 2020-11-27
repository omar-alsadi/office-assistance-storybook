import React from 'react'

import speechBox from './../../assest/speech-box.png';

import { useStateValue } from '../../StateProvider';

import setOption from '../../actions';

const SaraEn3 = ({ info }) => {

    const [state, dispatch] = useStateValue();

    const hundleClick = e => {
        dispatch(setOption(e.target.value));
        return state;
    }

    return (


        <div className='slide'>
            <div className='lady sara-5' alt='sara'></div>
            <div className='speechBox'>
                <img src={speechBox} className='sp-box-details' alt='speechBox' />
                <div className='speechTextwithInfo'>
                    <div className='situation'>Great! You can contact him by {info}</div>
                    <div className='situation'>Do you need anything else ?</div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='1' value='No, thanks' onClick={e => hundleClick(e)} />
                        <label for='1' type='text' className='label'>No, thanks.</label>
                    </div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='2' value='Yes, I’m looking for a website' onClick={e => hundleClick(e)} />
                        <label for='2' type='text' className='label'>Yes, I’m looking for a website</label>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SaraEn3