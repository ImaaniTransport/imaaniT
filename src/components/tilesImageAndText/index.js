import React from 'react';
import './style.css'



const tilesImageAndText = ({ name, image}) => {

   
    return (
        

            <div className='tilesImageAndText'>   

                <div>
                <img className='picsBottom' src={image} alt='logo' />
                </div>

                <div className='tilesTextContainer'>
                <div className='tilesText1'>
                    <h4>Imaani Express</h4>
                    <p>Learn about all FedEx has to offer for shipping across borders. Prepare and find international documents,
                        estimate duties and taxes, search country profiles, harmonized codes and much more. 
                    </p>
                    <a href= '#'>LEARN MORE</a>
                </div>

                <div className='tilesText1'>
                <h4>Imaani Relocate</h4>

                    <p>Learn about all FedEx has to offer for shipping across borders. Prepare and find international documents,
                        estimate duties and taxes, search country profiles, harmonized codes and much more.
                    </p>
                    <a href= '#'>LEARN MORE</a>
                </div>

                <div className='tilesText1'>
                <h4>Imanni Business Pack</h4>
                    <p>Learn about all FedEx has to offer for shipping across borders. Prepare and find international documents,
                        estimate duties and taxes, search country profiles, harmonized codes and much more.
                    </p>
                    <a href= '#'>GET STARTED</a>
                </div>

            </div>
               
            </div>
        
    );
}

export default tilesImageAndText;
