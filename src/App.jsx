import React from 'react'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import './App.css'
import { Provider } from 'react-redux';
import store from './store/store'

function App() {
  return (
    <div>
      <Provider store={store}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/cart' element={ <Cart/>} />
        </Routes>
      </Router>
      </Provider>
    </div>
  )
}

export default App
