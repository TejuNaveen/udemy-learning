import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components';

const StyledButton  = styled.button`
    background:  ${props => props.bgColor ? 'red' : 'green'};
    color: #fff;
    border: none;
    padding: 5px 10px;
    &:hover {
        background: ${props => props.bgColor ? 'red' : 'green'};
        opacity: .5;
    }
`;
    


class ConditionalCheck extends Component {
    constructor(){
        super()
        this.state = {
            persons: [
                {id:'acscd',name: 'naveen'},
                {id:'vasd',name: 'praveen'},
                {id:'vsdsd',name: 'prasanth'},
            ],
            userName: 'naveen',
            show: true

        }
    }
    toggleHandler = ( ) => {
        const showCond =  this.state.show;
        this.setState({
            show: !showCond
        })
    }
    deleteList = (personIndex) => {
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1)
        this.setState({
            persons: persons
        }, () => {
            console.log(personIndex)
        })
    }

    updateName = (event, id) => {
        const personIndex = this.state.persons.map(person => {
            return person.id === id,
            console.log(person.id, person.name)
        })
        
        let person = {
            ...this.state.persons[personIndex]
        }

        //const person = Object.assign({}, this.state.persons[personIndex])

        person.name = event.target.value;
        const persons = [...this.state.persons]
        persons[personIndex] = person

        this.setState({
            persons: persons
        })

    }

    

    render() {
        const classes = [];
        if(this.state.persons.length <= 2){
            classes.push('red')
        }
        if(this.state.persons.length <= 1){
            classes.push('bold')
        }
       
        let content = '';
        if(this.state.show){
            content =  (
                <div>
                    <h2>Hi {this.state.userName}</h2>
                     {this.state.persons.map((person, index) => {
                         return (
                         <div key={index} className="box"> 
                             <input type="text" onChange={(event) => this.updateName(event, person.id)} value={person.name}/>
                             <p onClick={() => this.deleteList(index)} >{person.id}. Welcome to the course {person.name}</p>
                         </div>
                         )
                    })}
                </div>
            )
            // style.background = 'green'
            // style[':hover'] = {
            //     background: '#cccccc',
            //     opacity: '.9'
            // }
        }
        else {
            content = (
                <div className="box">
                    <h2>Please Login</h2>
                </div>
            )
            // style.background = 'red'
            // style[':hover'] = {
            //     background: '#fff',
            //     opacity: '.9'
            // }
        }
        return (
            <div>
                <p className={classes.join(' ')}>Conditional check</p>
                <StyledButton bgColor={this.state.show} onClick={this.toggleHandler}>show content</StyledButton>
                {content}
            </div>
        )
    }
}

export default ConditionalCheck;