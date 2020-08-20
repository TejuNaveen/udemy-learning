import React, { Children } from 'react'

function Person(props) {
    return (
        <div>
            <h1>function component HOOKS example</h1>
            <p>Hi am {props.name} and am {Math.floor(Math.random() * 30 )} years old
            </p>
            {props.children}
        </div>
    )
}

export default Person
