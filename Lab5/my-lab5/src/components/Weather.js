import React, { Component } from 'react';

class Weather extends Component {
    render() {
      return (
        <div> 
           <p>Localizacion: {this.props.city} </p>
           <p>Temperatura: {this.props.temperature} </p>
           <p>Humedad: {this.props.humidity} </p>
           <p>Condiciones: {this.props.description} </p>
            
        </div>
      );
    }
  }
  export default Weather;