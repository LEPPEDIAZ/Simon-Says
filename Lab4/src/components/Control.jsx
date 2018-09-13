import React from 'react';
import PropTypes from 'prop-types';
import './Control.css';

function Control(props) {
  return (
    <div className="Control">
      <h2 className="Control-appName">simon</h2>
      <div className="Control-boxCount">
        {props.round}
      </div>
      <div className="Control-LoosesCount">
        {props.loose}
      </div>
      <button
        className="Control-button Control-buttonStart"
        onClick={props.onClickStart}
      />
      <h3 className="Control-textStart">Start</h3>
      <button
        className="Control-button Control-buttonOnOff"
        onClick={props.onClickOnOff}
      />
      <h3 className="Control-textOnOff">On</h3>
    

     
      
    </div>
  );
}

Control.propTypes = {
  onClickOnOff: PropTypes.func.isRequired,
  onClickStart: PropTypes.func.isRequired,
  loose: PropTypes.number,
  round: PropTypes.number,
};

Control.defaultProps = {
  round: null,
  loose: null,
};

export default Control;
