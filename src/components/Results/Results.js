import React from 'react'
import './Results.scss'
import closeIcon from '../../icons/close-icon.svg'

const Results = ({ results, result }) => {

    const setResult = () => result(null);

    return (
        <>
            {results && (
                <div className="container">
                    <hr />
                    <h3>Results: </h3> 
                    
                    <span onClick={setResult}>
                        <img className="close-icon" src={closeIcon} />
                    </span>
                    
                    {results.length === 0 && (<span>No results found for given query</span>)}
                    <table className="table table-striped my-5">
                        <tbody>

                            {results.map((e, i) => (

                                    <tr>
                                        <th scope="col">{e.char}</th>
                                        <th scope="col">{e.value}</th>
                                    </tr>

                            ))}

                        </tbody>
                    </table>
                    <hr/>
                </div>
            )}
        </>
    )
}

export default Results
