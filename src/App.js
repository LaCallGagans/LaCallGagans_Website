import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/CommonComponents/Header'
import About from './components/MainBodyComponents/About';
import Activity from './components/MainBodyComponents/Activity';
import Contact from './components/MainBodyComponents/Contact';
import Home from './components/MainBodyComponents/Home';
import Footer from './components/CommonComponents/Footer';

export const App = () => {
  return (
    <Router>
      <div className='App w-full'>
        <Header />
        <div className='w-full pt-80'>
          <Routes>
            <Route path='/' element = {<Home />}/>
            <Route path='/About' element = {<About />}/>
            <Route path='/Activity' element = {<Activity />}/>
            <Route path='/Contact' element = {<Contact />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}
