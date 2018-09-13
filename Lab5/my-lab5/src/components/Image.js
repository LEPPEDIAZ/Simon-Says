import React from 'react'

class Image extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       imgSrc: 'http://icons.iconarchive.com/icons/bokehlicia/pacifica/256/weather-icon.png'
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      imgSrc: 'http://icons.iconarchive.com/icons/graphicloads/folded/256/cloudy-rain-folded-icon.png'
    });
  }

  handleMouseOut() {
    this.setState({
      imgSrc: 'http://icons.iconarchive.com/icons/bokehlicia/pacifica/256/weather-icon.png'
    });
  }

  render() {
    return (
      <div>
        <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc}/>
      </div>
    );
  }

}

Image.propTypes = {
}

Image.defaultProps = {
}

export default Image;