import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'
import {CalculateScore} from './Components/CalculatorScore'

function App() {
 return(
  <div>
  
  <Home/>
  <AboutUs/>
  <Contact/>
  <h1>Welcome to the first session of react</h1>
  <div>
    <CalculateScore Name={"Steeve"} School={"ABC School"} total={284} goal={3} />
  </div>

  </div>
 )
}

export default App
