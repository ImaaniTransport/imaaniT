import React from 'react';
import './style.css'
import { ActionThumbsUpDown } from 'material-ui/svg-icons';

const onClickHandler = ({image}) => {

   
    return (
        <div className='background'>

            <div className='onClickHandler'>               
                <div>
                    <img className='SMlogo' src={image} alt='logo' />
                    
                </div>

               
            </div>
        </div>
    );
}

export default onClickHandler;
