import React, { Component } from 'react'
import './style.css'

const styles={
    transition: 'tilesPicBackground' 
};

 class Card extends Component {
constructor(props) {
    super(props)

    this.state = {

         
    }
}


    render() {
        return (
            <div className='background'>

            <div onClick={()=>{}} className='card'>               
                <div>
                    <img className='logo' src={this.props.image}  alt='logo' />
                    <div className='floatText'>{this.props.name}</div>
                    
                </div>

               
            </div>
        </div>
        )
    }
}

export default Card;



