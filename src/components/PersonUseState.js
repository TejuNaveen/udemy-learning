import React, {useState} from 'react'

const PewrsonUseState = (props) => {

    const [personState, setPersonState] = useState({
        person: [
            {name: 'naveen', age: 18},
            {name: 'praveen', age: 12},
            {name: 'prasanth', age: 10}
        ],
        otherState: "somthing new value"
    })
    const [otherState, setOtherState] = useState('somthing new value')
    console.log(personState, otherState)
    const clickHandler = () => {
        setPersonState({
            person: [
                {name: 'praveen', age: 18},
                {name: 'naveen', age: 12},
                {name: 'pavan', age: 10}
            ]
        })        
    }

    return (
        <div>
            <div>
                <h1>useState HOOKS example</h1>
                <p>Am {props.name} and am {props.age} old.</p>
                <p>{props.children}</p>
                <button onClick={clickHandler}>change name</button>
                <p>I am {personState.person[0].name} and my age is {personState.person[0].age}</p>
                <p>I am {personState.person[1].name} and my age is {personState.person[1].age}</p>
                <p>I am {personState.person[2].name} and my age is {personState.person[2].age}</p>
            </div>
        </div>
    )
}

export default PewrsonUseState
