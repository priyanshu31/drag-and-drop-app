import React, { useState } from 'react'
import './Submit.scss'
import leftIcon from '../../icons/left-icon.svg'
import rightIcon from '../../icons/right-icon.svg'
import crossIcon from '../../icons/close-icon.svg'

const Submit = () => {

    const [integer, setInteger] = useState(50);
    const [integerActive, setIntegerActive] = useState(false);

    const dragStart = e => e.dataTransfer.setData('text/plain', e.target.id);
    
    const doubleClick = e => setIntegerActive(!integerActive)

    const handleEnter = e => {

        if(e.key === 'Enter')
            setIntegerActive(false)
    }

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
                <div 
                    id="integer" 
                    className="tile" 
                    draggable="true" 
                    onDragStart={dragStart} 
                    onDoubleClick={doubleClick}
                    title="Double click to change the value"
                >
                    
                    {integerActive ? (
                        
                        <input 
                            type="number" 
                            value={integer} 
                            onChange={e => setInteger(e.target.value)} 
                            className="integer-input"
                            onKeyPress={handleEnter}
                        />

                    ) : integer}
                    
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
