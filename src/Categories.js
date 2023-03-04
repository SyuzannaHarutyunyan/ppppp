import { useContext } from 'react';
import { useRef, useState,useEffect } from 'react'
import {menu} from './Components/menu'
import { Context } from './Context';
import {MdOutlineArrowBackIosNew} from 'react-icons/md'

export default function Categories() {
    const [list, setList] = useState(menu);
    const[forZoom,setForZoom] = useState([]);
    const[openZoom,setOpenZoom] = useState(false);
    const $ = useContext(Context)
    const loaderRef = useRef()
    const filterCategories = item =>{
        const effect = menu.filter(current => {
            return current.category === item
        })
        setList(effect)
    }
    useEffect(() =>{
        loaderRef.current.style.display = 'flex';
        setTimeout(() =>{
            loaderRef.current.style.display = 'none';
        },3000);
    },[list])

  return (
    <div className='products'>
        <div className="zoom-img" style={{clipPath : openZoom ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' : 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}}>
            <MdOutlineArrowBackIosNew onClick={() => {
                setOpenZoom(false);
            }}/>
            {forZoom.map(zoom => {
                return <div className='zoom-content' key={zoom.id}>
                    <img src={zoom.picture} alt="" />
                    <div className='zoom-item'>
                        <h2>More Information</h2>
                        <h3>{zoom.name}</h3>
                        <span>{zoom.made}</span>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, blanditiis. Necessitatibus saepe, eos perferendis expedita iusto nam! Quos culpa perferendis deleniti possimus hic adipisci veniam iste, explicabo labore voluptatum blanditiis libero nisi provident dolore debitis alias ea! Exercitationem dolor eum qui, omnis aspernatur rerum recusandae molestiae eligendi sequi asperiores distinctio suscipit odio ea aliquid ex quidem tempora non, voluptatem nihil harum? Sit dicta quas hic id exercitationem illum aliquid animi, atque, quo optio praesentium, eos impedit fugiat molestiae eius? Officiis molestiae, eaque possimus officia nemo blanditiis. Laboriosam, animi eos sint fugiat asperiores iste totam, a dolorum, expedita omnis exercitationem dolorem!</p>
                        <h4>{zoom.price}$</h4>
                        <div className="stars">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star" style={{background : zoom.price < 20 ? 'gray' : 'darkorange'}}></div>
                        <div className="star" style={{background : zoom.price < 50 ? 'gray' : 'darkorange'}}></div>
                        <div className="star" style={{background : zoom.price < 100 ? 'gray' : 'darkorange'}}></div>
                    </div>
                    <div className="pay-buttons">
                        <button style={{background : $.carts.includes(zoom) ? '#212121' : 'saddlebrown', PointerEvent : $.carts.includes(zoom) ? 'none' : 'unset'}}onClick={() =>{
                            if($.carts.includes(zoom)){
                                return false
                            }
                            else{
                                $.addCart(zoom);
                                $.setTotal($.total + zoom.data)
                            }
                        }}>ADD TO CART</button>
                        <button onClick={() => $.setOpenPay(true)}>BUY NOW</button>
                    </div>
                    </div>
                </div>
            })}
        </div>
        <h2>Products</h2>
        <div className="products-container">
        <div className="tab-menu">
            <button onClick={() => setList(menu)}>All</button>
            <button onClick={() => filterCategories('Shoes')}>Shoes</button>
            <button onClick={() => filterCategories('Cap')}>Cap</button>
            <button onClick={() => filterCategories('Shirt')}>Shirt</button>
            <button onClick={() => filterCategories('Jewelry')}>Jewelry</button>
            <button onClick={() => filterCategories('Bags')}>Bags</button>
            <button onClick={() => filterCategories('Glasses')}>Glasses</button>
            <button onClick={() => filterCategories('Electronics')}>Electronics</button>
            <button onClick={() => filterCategories('Watches')}>Watches</button>
            <button onClick={() => filterCategories('Beauty')}>Beauty</button>
            <button onClick={() => filterCategories('Toys')}>Toys</button>
        </div>
        <div className="products-menu">
            <div className="loader" ref={loaderRef}>
                <img src="https://thumbs.gfycat.com/DishonestInsecureAtlanticridleyturtle-max-1mb.gif" alt="" />
            </div>
            {list.map(item =>{
                return <div className="products-item" key={item.id}>
                    <img src={item.picture} alt="" onClick={() => {
                        setForZoom([item]);
                        setOpenZoom(true);
                    }}/>
                    <h2>Brandname : {item.name}</h2>
                    <h3>{item.made}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id sint repudiandae aspernatur illo delectus!</p>
                    <span style={{textDecoration : 'line-through',color:'red'}}>{item.price + 46}$</span>
                    <div className="star-cont">
                    <span>{item.price}$</span>
                    <div className="stars">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star" style={{background : item.price < 20 ? 'gray' : 'darkorange'}}></div>
                        <div className="star" style={{background : item.price < 50 ? 'gray' : 'darkorange'}}></div>
                        <div className="star" style={{background : item.price < 100 ? 'gray' : 'darkorange'}}></div>
                    </div>
                    </div>
                    <button onClick={(e) => {
                        $.addCart(item)
                        if($.carts.includes(item)){
                            e.target.parentElement.classList.add('shake');
                            setTimeout(() => {
                                e.target.parentElement.classList.remove('shake');
                            },500)
                        }
                        else{
                            e.target.children[0].classList.add('adding');
                            setTimeout(() => {
                                e.target.children[0].classList.remove('adding');
                            },1000)
                            $.setTotal($.total + item.data)
                        }
                    }}>Add to Cart
                    <span className='add'>+1</span>
                    </button>
                </div>
            })}
        </div>
        </div>
    </div>
  )
}
