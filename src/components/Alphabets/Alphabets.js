import React, { useState, useEffect } from 'react'
import './Alphabets.scss'

const Alphabets = () => {

  const [alphabets, setAlphabets] = useState([]);

  useEffect(() => {

    let alphaArray = [];

    for(let i = 65; i < 91; i++)
      alphaArray.push(String.fromCharCode(i));

    setAlphabets(alphaArray)
  }, []);

  return (
        <section id="top-bar">
          <div id="clone-container">
            <div id="scroll-box">
              <div id="tile-container">

                {
                  alphabets.map((e) => (
                    <div className="tile-wrapper">
                      <div className="tile">{e}</div>
                    </div>
                  ))   
                }

              </div>
            </div>
          </div>
        </section>
    )
}

export default Alphabets
