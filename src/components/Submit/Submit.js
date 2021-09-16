import React, { useEffect, useState } from 'react'
import './Submit.scss'
import leftIcon from '../../icons/left-icon.svg'
import rightIcon from '../../icons/right-icon.svg'
import crossIcon from '../../icons/close-icon.svg'
import axios from 'axios';

const Submit = ({ result }) => {

    const [integer, setInteger] = useState(50);
    const [integerActive, setIntegerActive] = useState(false);
    const [error, setError] = useState(null);

    const dragStart = e => e.dataTransfer.setData('text/plain', e.target.id);
    
    const doubleClick = e => setIntegerActive(!integerActive)

    const handleEnter = e => {

        if(e.key === 'Enter')
            setIntegerActive(false)
    }

    const submit = async (e) => {

        let dropPanel = document.getElementById('drop-panel').childNodes;
        
        if(dropPanel.length !== 3)
        {
            result(null);
            setError('Drop Panel should have only 3 expression to submit');
            return;
        }

        if(dropPanel[0].id === "left" || dropPanel[0].id === "right" || dropPanel[0].id === "integer")
        {
            result(null);
            setError('First Expression should be an Alphabet only');
            return;
        }
        
        if(dropPanel[1].id !== "left" && dropPanel[1].id !== "right")
        {
            result(null);
            setError('Second Expression should be a Logical operator only');
            return;
        }
        
        if(dropPanel[2].id !== "integer")
        {
            result(null);
            setError('Third Expression should be a Number only');
            return;
        }

        console.log(dropPanel);

        try {
            let api_res = await axios
                            .get(`https://draganddrop-backend.herokuapp.com/data?alphabet=${dropPanel[0].innerText}&operator=${dropPanel[1].id === "left" ? '<' : '>'}&value=${dropPanel[2].innerText}`)
                            
            api_res = api_res.data

            console.log(api_res)

            result(api_res);
        } catch(err) {

            result(null);
            setError('Server Error');
            console.log(err)
        }
    }

    useEffect(() => {

        setTimeout(() => {
            setError(null);
        }, 5000);

    }, [error])

    useEffect(() => console.log(error), [error])

    return (
        <>
            <div className="submit-flex">

                <div className="tile-wrapper">
                    <div id="left" className="tile icons" draggable="true" onDragStart={dragStart}>
                        <img src={leftIcon} draggable="false" />
                        <img src={crossIcon} className="cross-icon" style={{display: 'none'}} draggable="false" />
                    </div>
                </div>

                <div className="tile-wrapper">
                    <div id="right" className="tile icons" draggable="true" onDragStart={dragStart}>
                        <img src={rightIcon} draggable="false" />
                        <img src={crossIcon} className="cross-icon" style={{display: 'none'}} draggable="false" />
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

                <button type="button" className="btn btn-primary submit-btn" onClick={submit}>
                    Submit
                </button>

                
            </div>
            {error && (
                <div className="alert alert-danger fade show">
                    {error}
                </div>
            )}
        </>
    )
}

export default Submit
