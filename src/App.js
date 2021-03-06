import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './css/App.css'

import Header from './components/nav/index'
import Footer from './components/footer/index'

import Home from './components/Home'
import About from './components/About'
import Resources from './components/Resources'
import Benefits from './components/Benefits'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="App">
     <header>
      <Header />
     </header>
     <div className='main'>
      <Switch>
        <Route path='/About'>
          <About />
        </Route>
        <Route path='/Resources'>
          <Resources />
        </Route>
        <Route path='/Benefits'>
          <Benefits />
        </Route>
        <Route path='/Contact'>
          <Contact />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
     </div>
     <footer>
       <Footer />
     </footer>
    </div>
  );
};

export default App;