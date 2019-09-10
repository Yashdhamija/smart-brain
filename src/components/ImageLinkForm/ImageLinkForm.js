import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f4'>
        {'This Magic Brain will detect faces in your pictures. Git it a try.'}
      </p>
      <div className='center'>
        <div className='form center pa3 br3 shadow-5'>
          <input className='f4 pa2 w-70' type='tex' onChange={onInputChange}/>
          <button
            className='f4 w-30 grow link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
