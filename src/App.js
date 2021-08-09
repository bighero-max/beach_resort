import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Switch>
           <Route path='/' exact component={Home} />
           <Route path='/rooms' exact component={Rooms} />
           <Route path='/rooms/:slug'  component={SingleRoom} />
           <Route component={Error} />
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
