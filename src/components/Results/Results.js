import React from 'react'
import './Results.scss'

const Results = ({ results }) => {
    return (
        <>
            {results && (
                <div className="container">
                    <hr />
                    <h3>Results: </h3>
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
