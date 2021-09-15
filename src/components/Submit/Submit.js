import React from 'react'
import './Submit.scss'
import leftIcon from '../../icons/left-icon.svg'
import rightIcon from '../../icons/right-icon.svg'

const Submit = () => {
    return (
        <div className="submit-flex">

            <div className="tile-wrapper">
                <div className="tile icons">
                    <img src={leftIcon} />
                </div>
            </div>

            <div className="tile-wrapper">
                <div className="tile icons">
                    <img src={rightIcon} />
                </div>
            </div>

            <div className="tile-wrapper">
                <div className="tile">
                    50
                </div>
            </div>

            <button type="button" className="btn btn-primary submit-btn">
                Submit
            </button>
            
        </div>
    )
}

export default Submit
