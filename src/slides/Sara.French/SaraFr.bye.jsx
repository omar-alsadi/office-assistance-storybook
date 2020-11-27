import React from 'react'

import speechBox from './../../assest/speech-box.png';


const SaraFrBye = () => {

    return (

        <div className='slide'>
            <div className='lady sara-bye' alt='sara'></div>
            <div className='speechBox'>
                <img src={speechBox} className='sp-box' alt='speechBox' />
                <div className='speechText'>
                    <div className='situation'>Vous êtes le bienvnu</div>
                    <div className='situation'>Bonne journée,au revoir</div>
                </div>

            </div>
        </div>
    )
}

export default SaraFrBye