import React, {useState} from "react";
import { CreditCard } from "../components/CreditCard";
import './Home.css';
import payPal from '../images/PayPal.png';
import discover from '../images/discover.png';
import visa from '../images/4846458.png';
import cardi from '../images/pngaaa.png';
import { useForm } from "react-hook-form";
import ReorderIcon from '@material-ui/icons/Reorder'
const Home = () => {
  const [ccNumber, setccNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [showNav, setShowNav] = useState(false);
  const{ register, watch} = useForm();
        
  const handleChange = (e) => {
    const nextField = e.target.parentElement.nextSibling.childNodes[1];
    const reg = new RegExp('^[0-9]+$');
    let newValue = e.target.value.replace(/\s/g, '');
      if (reg.test(newValue)) {
       newValue = newValue.toString().replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, ' ');
       setccNumber(newValue);
    }
    if(newValue.length > 18) {
      nextField.focus();
    }
  }
  const handleDate=(e) => {
    const nextField = e.target.parentElement.nextSibling.childNodes[1];
    let text = e.target.value;
    setExpDate(
      text.length === 3 && !text.includes("/")
        ? `${text.substring(0, 2)}/${text.substring(2)}`
        : text
    );
    if(text.length > 4){
      nextField.focus();
    }
  }
  const handleCvv = (e) => {
    const nextField = e.target.parentElement.nextSibling.childNodes[1];
    let newValue = e.target.value;
    if(newValue.length > 2){
      nextField.focus();
    }
  }
  return(
    <div className="body_container">
      <div className="body_nav">
        <div className="body_nav_first">
          <ul id={showNav ? "hidden" : ''}>
            <li>TRIPS</li>
            <li>RECENTLY VIEWED</li>
            <li>BOOKINGS</li>
          </ul>
          <button onClick={() => setShowNav(!showNav)}><ReorderIcon /></button>
        </div>
      <ul>
      <li className="img_container" style={{background: '#02acab'}}>
          <img src = {cardi}  alt='face_icon'/>
      </li>
      </ul>
      </div>
      <div className="body_container_flex">
        <div className="body_container_left">
          <h3>Payment Information</h3>
          <h5>Choose your method of payment.</h5>
          <div className="main_product_image">
            <CreditCard 
            digits={watch('credit_number')}
            full_name = 'Jane Doe'
            expiry_date={watch('exp_date')}
            
            />
            </div>
        </div>
        <div className="main_container">
          <div className="main_container_top">
            <div className="img_container">
              <img src={visa} alt = 'visa ' />
            </div>
            <div className="img_container">
              <img src={discover} alt = 'discover' />
            </div>
            <div className="img_container">
              <img src={payPal} alt = 'paypal ' />
            </div>
          </div>
          <div className="main_container_products">
            <div className="main_container_product_inputs">
              <div className="main_container_product_input">
                <label>Credit card number</label>
                <input type='text' name = 'credit_number' value={ccNumber} {...register("credit_number", {onChange: handleChange, required: true })}/>
              </div>
              <div className="main_container_product_input">
                <label>Expiration date</label>
                <input type='text' name = 'exp_date' value={expDate} 
                
                {...register("exp_date", { onChange: handleDate, required: true })}
                />
              </div>
              <div className="main_container_product_input">
                <label>Security code</label>
                <input type='number' name = 'cvv_code' {...register("cvv_code", { onChange: handleCvv, required: true })}/>
              </div>
              <div className="main_container_product_input">
                <label>Postal Code</label>
                <input type='number' name = 'postal_code' {...register("postal_code")}/>
              </div>
            </div>
            <div className="radio_container">
                <input type = 'radio' />
                <p>Use this card for next time purchase</p>
            </div>
            <button className="card_button">Add card</button>
          </div>
        </div>
      </div>
      <div className="total_product">
        <div className="total_product_items">
          <p>Subtotal</p>
          <p>N2,497.00</p>
        </div>
        <div className="total_product_items">
          <p>Estimated TAX</p>
          <p>N2,497.00</p>
        </div>
        <div className="total_product_items">
          <p>Promotional Code: <span>Z4KXLM9A</span></p>
          <p>-N60.00</p>
        </div>
      </div>
      <div className="total_product_items" style={{padding: '2rem'}}>
          <button className="complete_button">Complete payment</button>
          <h5>Total: N2,497.00</h5>
      </div>
    </div>
  )
}
export default Home;