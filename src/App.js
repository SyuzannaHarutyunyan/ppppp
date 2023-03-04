import {useState } from 'react';
import './App.css';
import Categories from './Categories';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Headermain from './Components/Headermain';
import Payment from './Components/Payment';
import Showmenu from './Components/Showmenu';
import { Context } from './Context';

function App() {

  const [carts,SetCarts] = useState([]);

  const [openCart,setOpenCart] = useState(false);

  const [count,setCount] = useState(1);

  const [money,setMoney] = useState(1);

  const [total,setTotal] = useState(0);

  const[openPay,setOpenPay] = useState(false);

  const addCart = element => {
    if(carts.includes(element)){
      return false;
    }
    else{
      SetCarts([...carts,element]);
    }
  }

const removeCart = id =>{
  SetCarts([...carts.filter(item => item.id !== id)])
}

  const elements = {
    carts,SetCarts,
    addCart,removeCart,
    openCart,setOpenCart,
    setCount,setMoney,
    total,setTotal,
    openPay,setOpenPay
  }

  return (
    <Context.Provider value={elements}>
    <div className="App">
      <Header />
      <Showmenu />
      <Headermain />
      <Categories />
      <Cart />
      <Payment />
    </div>
    </Context.Provider>
  );
}

export default App;
