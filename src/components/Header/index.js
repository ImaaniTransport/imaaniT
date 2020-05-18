import React, {useState} from 'react';

import './style.css'
import SocialMedia from '../SocialMedia/index'

const Header = () => {

    const [search, setSearch] = useState(false); 

 const submitSearch= (e)=>{
     e.preventDefault();
     alert('searched')
 }

const openSearch=()=>{
    setSearch(true);}

const searchClass=search ?'searchInput active' : 'searchInput';


    return (
        <header className='header'>
            <img className='imaniLogo' src={require('..//../container/images/logo.png')} alt='logo'/>
            
           <ul>  
               <li className='navs' ><a href= '#'>Shipping</a>
                <ul>
                    <li><a href= '#'>How to ship</a></li>
                    <li><a href= '#'>Upon shipping</a></li>
                    <li><a href= '#'>We ship for you</a></li>
                </ul>
               </li>
               <li className='navs'><a href= '#'>Tracking</a>
                    <ul>
                        <li><a href= '#'>How to ship</a></li>
                        <li><a href= '#'>Upon shipping</a></li>
                        <li><a href= '#'>We ship for you</a></li>
                    </ul>
               </li>
               <li className='navs'><a href= '#'>Support</a>
                   <ul>
                        <li><a href= '#'>How to ship</a></li>
                        <li><a href= '#'>Upon shipping</a></li>
                        <li><a href= '#'>We ship for you</a></li>
                    </ul>
               </li>
               <li className='navs'><a href= '#'>Account</a>
                    <ul>
                            <li><a href= '#'>How to ship</a></li>
                            <li><a href= '#'>Upon shipping</a></li>
                            <li><a href= '#'>We ship for you</a></li>
                    </ul>
               </li>
           </ul>
          
           <div className='login'>
           <a href= '#'> SignUp/Login </a>
           <img src={require('..//../container/images/profile.png')} alt='logo'  />

           <div className='search'>
            <form className='form' onSubmit={submitSearch}>
                <input type='text' className={searchClass} placeholder='search'/>
                <img onClick={openSearch} className='searchicon' src={require('..//../container/images/search.png')} alt='logo'  />
            </form>
           </div> 
           
           </div>   

            

        </header>
    );
}

export default Header;
