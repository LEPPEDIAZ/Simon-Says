import React, { Component } from 'react';

class Time extends Component {

    constructor(){
        super()
        this.state={time: new Date()}
    }
    currentTime()
    {
        this.setState({
            time: new Date()
        })
    }
    currYear = () => {
        var year =  new Date().getFullYear();
        return year;
      }
      currMonth = () => {
        var month =  new Date().getMonth() + 1;
        return month;
      }
      currDay = () => {
        var Day =  new Date().getDate();
        return Day;
      }
  
    componentWillMount()
    {
        setInterval(()=> this.currentTime(), 1000)
    }
    render() {
        return (
            <h2> Guatemala en el .
                {this.currDay()}
                /
                {this.currMonth()}
                /
                {this.currYear()}
                . a las :
                {this.state.time.toLocaleTimeString()}
              


            </h2>

        )
    }


}
export default Time;