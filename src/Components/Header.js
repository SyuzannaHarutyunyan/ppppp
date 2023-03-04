import React, { useContext, useState } from 'react'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import {FaShoppingBag} from 'react-icons/fa';
import { Context } from '../Context';

export default function Header() {
    const $ = useContext(Context);
    const [openBurger,setOpenBurger] = useState(false);
    const [openShop,setOpenShop] = useState(false);
  return (
    <header>
        <h1>Michelia's Shop</h1>
        <div className="burger-menu" onClick={() => {
          setOpenBurger(!openBurger);
        }}>
          <div className="line" style={{transform: openBurger ?  'rotate(-45deg)' : 'rotate(0deg)'}}></div>
          <div className="line" style={{width: openBurger ?  '0' : '100%'}}></div>
          <div className="line" style={{transform: openBurger ?  'rotate(45deg)' : 'rotate(0deg)'}}></div>
        </div>
        <ul className='menu' style={{right : openBurger ? '0' : '-250px'}}>
            <li><a href="#">About</a></li>
            <li><a href="#">Shop</a><MdOutlineKeyboardArrowDown style={{transform: openShop ? 'scale(1,-1)' : 'scale(1)', fontSize : '25px', cursor : 'pointer'}} onClick={() => {
              setOpenShop(!openShop);
            }}/>
            <div className="shop-dropdown" style={{height: openShop ? '400px': '0'}}>
              <li><a href="#">All</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Cap</a></li>
              <li><a href="#">Shirt</a></li>
              <li><a href="#">Jewelry</a></li>
              <li><a href="#">Bags</a></li>
              <li><a href="#">Glasses</a></li>
              <li><a href="#">Electronics</a></li>
              <li><a href="#">Watches</a></li>
              <li><a href="#">Beauty</a></li>
              <li><a href="#">Toys</a></li>
            </div>
            
            
            </li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Sales & Offers</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Contact</a></li>
            <div className="shop-icon" onClick={() => $.setOpenCart(true)}>
        <button><FaShoppingBag /></button>
        <span>Cart ({$.carts.length})</span>
      </div>
        </ul>
        
    </header>
  )
}
