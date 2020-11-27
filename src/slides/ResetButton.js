import React from 'react'

import { useStateValue } from './../StateProvider'

import setOption from './../actions'

const ResetButton = () => {

    const [state, dispatch] = useStateValue();

    const hundleClick = e => {
        dispatch(setOption(e.target.value));
        return state;
    }

    return (
        <div>
            <div className='Reset text' alt='reset' title='Reset' value='' onClick={e => hundleClick(e)} />
        </div>
    )
}

export default ResetButton