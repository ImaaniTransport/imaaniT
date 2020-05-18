import React, {useState} from 'react'
import './style.css'
import Card from '../UI/Card';

const Hero =(props) => {

    
    const [reesize, setReesize] = useState(false);


const doReesize=()=>{
    setReesize(true);}

const searchClass = reesize ?'tilesPicBackground active' : 'tilesPicBackground';



    return (
        <div className='backgroundImage'>
        <div className='welcomeContainer'> 
        <div className="imani" >

            
           <div className='tilesContainer'>
                <div className={searchClass} onClick={doReesize}>
                <Card name="Send" image={require('../../container/images/senditem.png')}/>
                </div> 
                <div className='tilesPicMiddle' background-color= '#00aeea'>
                <Card name="Track" image={require('../../container/images/track.png')} />
                </div>
                <div className='tilesPicBackground'>
                <Card name="Location" image={require('../../container/images/location.png')}/>
                </div>
            
            
        

            </div>

            
            <div className='trackingWrapper'>
            <div className ='trackingIDcontainer'>
                <h1>1 - 3 Days Delivery Across West Africa</h1>
                <div className='trackingInput'>
                    <input type='text' className='input' placeholder='TRACKING ID'/>
                    <button type='button' className='button'>TRACK</button>
                </div>
            </div>

            <div className ='tracking'>
            <a href= '#'>MULTIPLE TRACKING NUMBERS</a>|
            <a href= '#'>NEED HELP?</a>
            </div>
            </div>
            

            
        </div>
        </div> 
        </div>
    )
}

export default  Hero;
