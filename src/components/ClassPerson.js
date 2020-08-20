import React, { Component } from 'react'
import PassingReference from './PassingReference'
import TwoWayBinding from './TwoWayBinding'

export class ClassPerson extends Component {
    state = {
        person: [
            {name: 'naveen', age: 18},
            {name: 'praveen', age: 12},
            {name: 'prasanth', age: 10}
        ]
    }

    clickHandler = (newName) => {
        this.setState({
            person: [
                {name: newName, age: 18},
                {name: 'naveen', age: 12},
                {name: 'nakul', age: 10}
            ]
        })        
    }

    inputChangeHandler = (event) => {
        this.setState({
            person: [
                {name: 'praveen', age: 18},
                {name: 'naveen', age: 12},
                {name: event.target.value, age: 10}
            ]
        })        
    }

    render() {
        return (
            <div>
                <h1>Class Component HOOKS example</h1>
                <p>Am {this.props.name} and am {this.props.age} old.</p>
                <p>{this.props.children}</p>
                <button onClick={this.clickHandler.bind(this, 'nakul')}>change name</button>
                <p>I am {this.state.person[0].name} and my age is {this.state.person[0].age}</p>
                <p>I am {this.state.person[1].name} and my age is {this.state.person[1].age}</p>
                <p>I am {this.state.person[2].name} and my age is {this.state.person[2].age}</p>
                <PassingReference click={this.clickHandler.bind(this, 'shivu')}></PassingReference>
                <TwoWayBinding  changed={this.inputChangeHandler}/>
            </div>
        )
    }
}

export default ClassPerson
