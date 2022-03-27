import React from 'react'
import {Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage'
import './App.css'

const App = () => {
  return (
    <div>
        <Route path='/' component={LandingPage} exact></Route>
    </div>
  )
}

export default App