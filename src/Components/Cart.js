import React, { useContext } from 'react'
import { Context } from '../Context'
import {MdOutlineCloseFullscreen} from 'react-icons/md';
import {FaTrash} from 'react-icons/fa';
import { memo } from 'react';
export default memo(function Cart() {
  const $ = useContext(Context);
  return (
    <div className='cart-container' style={{display : $.openCart ? 'flex' : 'none'}}>
      <MdOutlineCloseFullscreen  onClick={() => $.setOpenCart(false)}/> 
      <div className="cart">
        {$.carts.map(cart => {
          return <div key={cart.id} className="cart-item">
            <img src={cart.picture} alt="" />
            <div className="info">
              <h2>{cart.name}</h2>
              <h4>{cart.made}</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minus sapiente ipsa reprehenderit assumenda eius, a odit non asperiores veniam dolorum, delectus ducimus quo aperiam placeat quis quos iure adipisci!</p>
            </div>
            <div className="prices">
              <h2 className="sale">{cart.price + 46}$</h2>
              <h2>{cart.price}$</h2>
            </div>
            <div className="counts">
              <button onClick={() =>{
                if(cart.isQuan === 1){
                  $.setCount(cart.isQuan = 1)
                }
                else{
                  $.setCount(cart.isQuan -= 1)
                  $.setTotal($.total - cart.price)
                  $.setMoney(cart.data = cart.isQuan * cart.price)
                }
              }}>{cart.data === cart.price ? <FaTrash className='delete' onClick={() => {
                $.removeCart(cart.id);
                $.setTotal($.total - cart.data);
                if($.carts.length <= 1){
                  $.setOpenCart(false);
                }
              }}/> : '-'}</button>
              <span>{cart.isQuan}</span>
              <button onClick={() =>{
                $.setCount(cart.isQuan += 1);
                $.setMoney(cart.data = cart.isQuan * cart.price)
                $.setTotal($.total + cart.price)
              }}>+</button>
            </div>
            <h3>{cart.data}$</h3>
          </div>
        })}
      </div>
      <div className="information">
        <h2>Cart count is ({$.carts.lengts})p.</h2>
        <h3>Grand Total : {$.total}$</h3>
        <button onClick={() => $.setOpenPay(true)}>Pay with card</button>
      </div>
    </div>
  )
}
)