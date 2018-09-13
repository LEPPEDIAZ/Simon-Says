import React, { Component } from 'react';


class ManagerViewtwo extends Component {
    constructor(){
        super();
        this.state = {
            text: ""
        };

        
    }
    clicked(){
        this.setState({ text: this.refs.textBox.value});
    }
    
    //<button onClick={ (e) => {e.preventDefault(); this.clicked();}}>Agregar</button>
    render(){
        console.log('rendering')
        return<div>
            <span>Ingresar precio de producto</span>
            <br></br>
            {this.state.text}
            <br />
            <input ref="textBox" type="text" />
            <button onClick={ (e) => {this.clicked();}}>Agregar</button> 
            <br></br> 

        </div>;
    }
}
export {ManagerViewtwo as default}; 