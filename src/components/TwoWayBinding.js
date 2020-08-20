import React from 'react'

const TwoWayBinding = (props) => {
    const style = {
     fontSize: '1rem',
     border: '2px solid black'
    }
    return (
        <div>
            <h1>Two Way Data binding with components</h1>
            <input style={ style } type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
}


export default TwoWayBinding