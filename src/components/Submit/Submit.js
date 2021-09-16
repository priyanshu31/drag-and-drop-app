import React from 'react'
import './Submit.scss'
import leftIcon from '../../icons/left-icon.svg'
import rightIcon from '../../icons/right-icon.svg'
import crossIcon from '../../icons/close-icon.svg'

const Submit = () => {

    const dragStart = e => e.dataTransfer.setData('text/plain', e.target.id);

    return (
        <div className="submit-flex">

            <div className="tile-wrapper">
                <div id="left" className="tile icons" draggable="true" onDragStart={dragStart}>
                    <img src={leftIcon} />
                    <img src={crossIcon} className="cross-icon" style={{display: 'none'}} />
                </div>
            </div>

            <div className="tile-wrapper">
                <div id="right" className="tile icons" draggable="true" onDragStart={dragStart}>
                    <img src={rightIcon} />
                    <img src={crossIcon} className="cross-icon" style={{display: 'none'}} />
                </div>
            </div>

            <div className="tile-wrapper" draggable="true">
                <div id="integer" className="tile" draggable="true" onDragStart={dragStart}>
                    50
                    <img src={crossIcon} className="cross-icon" style={{display: 'none'}} />
                </div>
            </div>

            <button type="button" className="btn btn-primary submit-btn">
                Submit
            </button>
            
        </div>
    )
}

export default Submit
