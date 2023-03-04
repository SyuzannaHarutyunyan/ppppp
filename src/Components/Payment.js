import { useContext, useRef, useState } from "react";
import { AutoTabProvider } from "react-auto-tab";
import { Context } from "../Context";

export default function Payment(){
    const $ = useContext(Context);
    const [valid,setValid] = useState({
        name : '', surname : '', number : '', date : '',cvv : '',address : '', region : '',code : '', num1 : '', num2 : '', num3 : ''    })
        const changeInput = (field,e) => {
            setValid({...valid,[field] : e.target.value})
        }
        let nameRef = useRef();
        let surnameRef = useRef();
        let numberRef = useRef();
        let dateRef = useRef();
        let cvvRef = useRef();
        let regionRef = useRef();
        let validName = /^[A-Z]+$/;
        let validNumber = /^\d{4}-\d{4}-\d{4}-\d{4}$/;

        let validDate = /^\d{2}\/\d{2}$/;
        let validCvv = /^\d{3}$/
        let validRegion = /\+\d{3}/;
        let nums = /^\d{2}$/;
        
        const valiudFields = (e) => {
            e.preventDefault();
            nameRef.current.style.opacity = valid.name.match(validName) ? 0 : 1;
            surnameRef.current.style.opacity = valid.surname.match(validName) ? 0 : 1;
            numberRef.current.style.opacity = valid.number.match(validNumber) ? 0 : 1;
            dateRef.current.style.opacity = valid.date.match(validDate) ? 0 : 1;
            cvvRef.current.style.opacity = valid.cvv.match(validCvv) ? 0 : 1;
            regionRef.current.style.opacity = valid.region.match(validRegion) && valid.code.match(nums) && valid.num1.match(nums) && valid.num2.match(nums) && valid.num3.match(nums) ? 0 : 1
        }
        const numberChange = e =>{
            if(e.target.value.toString().charAt(e.target.value.length - 1).charCodeAt() >= 48 && e.target.value.toString().charAt(e.target.value.length - 1).charCodeAt() <= 57){
                if(e.target.value.length === 4 || e.target.value.length === 9 || e.target.value.length === 14){
                    setValid({...valid, number: e.target.value.toString().concat('-')})
                }
            
            else{
                setValid({...valid,number : e.target.value})
            }
        }
        }
        const numberKeyChange = e => {
            if(e.key === 'Backspace'){
                    e.preventDefault();
                    setValid({...valid,number : e.target.value.toString().slice(0,-1)})
                }
            }
        
        const dateChange = e => {
            if(e.target.value.toString().charAt(e.target.value.length - 1).charCodeAt() >= 48 && e.target.value.toString().charAt(e.target.value.length - 1).charCodeAt() <= 57){
            if(e.target.value.length === 2){
                setValid({...valid,date : e.target.value.toString().concat('/')})
            }
            else{
                setValid({...valid,date : e.target.value})
            }
        }
        }
        const dateKeyChange = e => {
            if(e.key === 'Backspace'){
                    e.preventDefault();
                    setValid({...valid,date : e.target.value.slice(0,-1)})
                }
            }
        const cvvChange = e => {
            if(e.target.value.toString().charAt(e.target.value.length - 1).charCodeAt() >= 48 && e.target.value.toString().charAt(e.target.value.length - 1).charCodeAt() <= 57){
                setValid({...valid,cvv : e.target.value})
        }
        }
        const cvvKeyChange = e => {
            if(e.key === 'Backspace'){
                e.preventDefault();
                setValid({...valid,cvv : e.target.value.slice(0,-1)})
            }
        }
        const regionChange = e =>{
            setValid({...valid,region : e.target.value})
        }
        const regionKeyChange = e => {
            if(e.key === 'Backspace'){
                e.preventDefault();
                setValid({...valid,region : e.target.value.slice(0,-1)})
            }
        }
        const codeChange = e => {
            if(e.target.value.toString().charAt(e.target.value.length - 1).charCodeAt() >= 48 && e.target.value.toString().charAt(e.target.value.length - 1).charCodeAt() <= 57){
                    setValid({...valid,code : e.target.value})
            }
        }
        const codeKeyChange = e => {
            if(e.key === 'Backspace'){
                e.preventDefault();
                setValid({...valid,code : e.target.value.slice(0,-1)})
            }
        }
        const num1Change = e => {
            if(e.target.value.toString().charAt(e.target.value.length - 1).charCodeAt() >= 48 && e.target.value.toString().charAt(e.target.value.length - 1).charCodeAt() <= 57){
                    setValid({...valid,num1 : e.target.value})
            }
        }
        const num1KeyChange = e => {
            if(e.key === 'Backspace'){
                e.preventDefault();
                setValid({...valid,num1 : e.target.value.slice(0,-1)})
            }
        }
        const num2Change = e => {
            if(e.target.value.toString().charAt(e.target.value.length - 1).charCodeAt() >= 48 && e.target.value.toString().charAt(e.target.value.length - 1).charCodeAt() <= 57){
                    setValid({...valid,num2 : e.target.value})
            }
        }
        const num2KeyChange = e => {
            if(e.key === 'Backspace'){
                e.preventDefault();
                setValid({...valid,num2 : e.target.value.slice(0,-1)})
            }
        }
        const num3Change = e => {
            if(e.target.value.toString().charAt(e.target.value.length - 1).charCodeAt() >= 48 && e.target.value.toString().charAt(e.target.value.length - 1).charCodeAt() <= 57){
                    setValid({...valid,num3 : e.target.value})
            }
        }
        const num3KeyChange = e => {
            if(e.key === 'Backspace'){
                e.preventDefault();
                setValid({...valid,num3 : e.target.value.slice(0,-1)})
            }
        }
    return (
        <div className="form-container" style ={{display : $.openPay ? 'flex' : 'none'}} onClick={(e) => {
            if(e.target.className === 'form-container'){
                $.setOpenPay(false)
            }
        }}>
            <form>
            <h2>Pay with Master/Visa Card</h2>
            <img src="https://icon-library.com/images/visa-master-icon/visa-master-icon-9.jpg" alt="" />
            <h5>Fill in the given fields</h5>
            <AutoTabProvider>
                <div className="for-name">
                <label>
                    <div className="invalid" ref={nameRef}>!</div>
                    <input type="text" 
                    placeholder="Name" 
                    value={valid.name} 
                    onChange={(e) => changeInput('name',e)} 
                     tabbable="false"/></label>
                <label>
                <div className="invalid" ref={surnameRef}>!</div>
                <input type="text" 
                placeholder="Surname" 
                value={valid.surname} 
                onChange={(e) => changeInput('surname',e)} 
                tabbable="false"/></label>
            </div>
            <label>
                <div className="invalid" ref={numberRef}>!</div>
                <input type="text" 
                placeholder="XXXX-XXXX-XXXX-XXXX" 
                value={valid.number} 
                onChange={(e) => numberChange(e)}  
                tabbable="false" 
                maxLength={19} 
                onKeyDown={(e) => numberKeyChange(e)}/></label>
            <label>
                <div className="invalid"ref={dateRef}>!</div>
                <input type="text" 
                placeholder="12/02" 
                value={valid.date} 
                onChange={(e) => dateChange(e)} 
                tabbable="false" 
                maxLength={5} 
                onKeyDown={(e) => dateKeyChange(e)}/></label>
            <label> 
                <div className="invalid"ref={cvvRef}>!</div>
                <input type="text" 
                placeholder="123" 
                value={valid.cvv} 
                onChange={(e) => cvvChange(e)} 
                tabbable="false" 
                maxLength={3} 
                onKeyDown={(e) => cvvKeyChange(e)}/></label>
            <label>
                <div className="invalid">!</div>
                <input type="text" 
                placeholder="Address" 
                value={valid.address} 
                onChange={(e) => changeInput('address',e)} 
                tabbable="false"/></label>
            <div className="phone">
                <label>
                    <div className="invalid" ref={regionRef}>!</div>
                    
                <input type="text" 
                placeholder="+374" 
                value={valid.region} 
                onChange={(e) => regionChange(e)} 
                tabbable="false" 
                maxLength={4} 
                onKeyDown={(e) => regionKeyChange(e)} 
                onFocus={(e) =>{
                    if(e.target.value.length === 0) {
                        setValid({...valid,region : e.target.value.toString().concat('+')})
                    }
                }}/>
                <input type="text" 
                placeholder="99" 
                value={valid.code}
                onChange={(e) => codeChange(e)} 
                tabbable="false" 
                maxLength={2} 
                onKeyDown={(e) => codeKeyChange(e)}/>
                <input type="text" 
                placeholder="XX" 
                value={valid.num1} 
                onChange={(e) => num1Change(e)} 
                tabbable="false" 
                maxLength={2}
                onKeyDown={(e) => num1KeyChange(e)}/>
                <input type="text" 
                placeholder="XX" 
                value={valid.num2} 
                onChange={(e) => num2Change(e)} 
                tabbable="false"
                maxLength={2}
                onKeyDown={(e) => num2KeyChange(e)}/>
                <input type="text" 
                placeholder="XX" 
                value={valid.num3} 
                onChange={(e) => num3Change(e)} 
                tabbable="false" 
                maxLength={2} 
                onKeyDown={(e) => num3KeyChange(e)}/>
                </label>
            </div>
            </AutoTabProvider>
            <button onClick={valiudFields}>Pay</button>
            <p>It's ok!</p>
        </form>
        </div>
    )
}