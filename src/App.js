import React, { Component } from 'react'
import './App.css'
import Home from './container/Home'
import Header from './components/Header'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Hero from './components/Hero'


class App extends Component {
  render() {
    return (

      <Router>
      <div className='App'>
        <Header/>
        <Hero/>
        <Route path='/' component = {Home}/>
      </div>
      </Router>
    )
  }
}

export default App;

