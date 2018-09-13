import React, { Component } from 'react';
import {inventory} from '../reducer/index'


class ManagerView extends Component {
   
    constructor(){
        super();
        this.state = {
            text: ""
        };
        this.state = {
            option2: ""
        };

        
    }
    clicked(){
        this.setState({ text: this.refs.textBox.value} );
    }
    clickedOption2(){
        this.setState({ option2: this.refs.textBox2.value});
        alert("Se a ingresado un nuevo producto")
    }
    
    //<button onClick={ (e) => {e.preventDefault(); this.clicked();}}>Agregar</button>
    render(){
        console.log('rendering')
        return<div>
            {this.state.text}
            <br></br>
            {this.state.option2}
            <br />
            <button>Add</button>
            <br></br>
            <input ref="textBox" placeholder="Nombre del producto" type="text" />
            <input ref="textBox2" type="text" placeholder= "Precio del Producto"/>
            <button onClick={ (e) => {this.clicked();}}>nombre</button>
            <button onClick={ (e) => {this.clickedOption2();}}> precio</button>  
            <br></br> 

        </div>;
    }
}
export {ManagerView as default}; 