import { useState } from 'react'
import { Routes,Route } from 'react-router-dom';
import './App.css'

import reducer,{ initialState } from './utils/reducer';

import Header from './components/header/Header';
import Catalog from './components/catalog/Catalog';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Checkout from './components/checkout/Checkout';
import { StateProvider } from './utils/stateProvider';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { Authprovider } from './context/authContext';
import Createorder from './components/createOrder/Createorder';
import OrderConfirmation from './components/orderConfirmation/OrderConfirmation';

 
function App() {
  // const [vitamins, setVitamins] = useState({})

  return (
    <>
    <StateProvider initialState={initialState} reducer={reducer}>
    <Authprovider>

      <Header />


      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/basket' element={<Checkout />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/register' element={<Register />} />
        <Route path='/create-order' element={<Createorder />} />
        <Route path='/order-confirmation' element={<OrderConfirmation />} />
     </Routes>
    
    </Authprovider>
    </StateProvider>
     <Footer />

    </>
    
  )
}

export default App
