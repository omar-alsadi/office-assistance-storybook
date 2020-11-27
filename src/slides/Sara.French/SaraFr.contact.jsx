import React from 'react'

import speechBox from './../../assest/speech-box.png';

import { useStateValue } from '../../StateProvider';

import setOption from '../../actions';

const SaraFr2B = () => {

    const [state, dispatch] = useStateValue();

    const hundleClick = e => {
        dispatch(setOption(e.target.value));
        return state;
    }

    return (


        <div className='slide'>
            <div className='lady sara-4' alt='sara'></div>
            <div className='speechBox'>
                <img src={speechBox} className='sp-box' alt='speechBox' />
                <div className='speechText'>
                    <div className='situation'>Bienvnun. Comment vous voulez lui contacter ?</div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='1' value='Par téléphone' onClick={e => hundleClick(e)} />
                        <label for='1' type='text' className='label'>Par téléphone</label>
                    </div>
                    <div className='option-container'>
                        <input name='options' type='radio' className='option' id='2' value='Par courriel' onClick={e => hundleClick(e)} />
                        <label for='2' type='text' className='label'>Par courriel</label>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SaraFr2B