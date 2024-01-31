import React from 'react';
import './YourCustomSwitchStyles.css';

function YourSwitchComponent(props) {
  return (
    <div className={`custom-switch-container ${props.mode === 'light' ? 'text-dark' : 'text-light'}`}>
      <input className="custom-switch-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
      <label className="custom-switch-track" htmlFor="flexSwitchCheckDefault">
        <div className="custom-switch-thumb"></div>
      </label>
      <label className="custom-switch-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
    </div>
  );
}

export default YourSwitchComponent;
