import React from 'react'

const PassingReference = (props) => {
    return (
        <div>
            <h1>Passing Reference Methods to components</h1>
            <button onClick={props.click}>click to change Class component person</button>
        </div>
    )
}

export default PassingReference
