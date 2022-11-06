import React from 'react'
import {Spin} from 'antd'
import './spinner.css'
function Spinner(props) {
    return (
        <div className='loaderspinner' p>
        <div className="spin">
            <Spin size='extra-large' />
            <h2>{props.name}</h2>
        </div>
        </div>
    )
}

export default Spinner
