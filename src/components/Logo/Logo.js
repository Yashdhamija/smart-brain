import React from 'react';
import Tilt from 'react-tilt';
import face from './Face.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma3 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 125, width: 125 }} >
        <div className="Tilt-inner pa2">
          <img style={{paddingTop: '5px'}} alt='logo' src={face}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
