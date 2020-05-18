import React from 'react';
import './style.css'
import { ActionThumbsUpDown } from 'material-ui/svg-icons';

const SocialMedia = ({image}) => {

   
    return (
        <div className='background'>

            <div className='SocialMedia'>               
                <div>
                    <img className='SMlogo' src={image} alt='logo' />
                    
                </div>

               
            </div>
        </div>
    );
}

export default SocialMedia;
