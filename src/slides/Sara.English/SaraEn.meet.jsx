import React from 'react'

import speechBox from './../../assest/speech-box.png';

import { useStateValue } from '../../StateProvider';

import setOption from '../../actions';

const SaraEn1B = () => {

    const [state, dispatch] = useStateValue();

    const hundleClick = e => {
        dispatch(setOption(e.target.value));
        return state;
    }

    return (


        <div className='slide'>
            <div className='lady sara-6' alt='sara'></div>
            <div className='speechBox'>
                <img src={speechBox} className='sp-box' alt='speechBox' />
                <div className='speechText'>
                    <div className='situation'>Sorry to say that but Mr.Omar has
                    left. Can I help you more?</div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='1' value='Yes, I’m looking for a website' onClick={e => hundleClick(e)} />
                        <label for='1' type='text' className='label'>Yes, I’m looking for a website</label>
                    </div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='2' value='Can I contact with him directly?' onClick={e => hundleClick(e)} />
                        <label for='2' type='text' className='label'>Can I contact with him directly?</label>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SaraEn1B