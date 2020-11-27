import React from 'react'

import speechBox from './../../assest/speech-box.png';

import { useStateValue } from '../../StateProvider';

import setOption from '../../actions';

const SaraEnBye = () => {

    const [state, dispatch] = useStateValue();

    const hundleClick = e => {
        dispatch(setOption(e.target.value));
        return state;
    }

    return (


        <div className='slide'>
            <div className='lady sara-bye' alt='sara'></div>
            <div className='speechBox'>
                <img src={speechBox} className='sp-box' alt='speechBox' />
                <div className='speechText'>
                    <div className='situation'>You're welcome</div>
                    <div className='situation'>Have a nice day, bye bye</div>
                </div>


            </div>
        </div>
    )
}

export default SaraEnBye