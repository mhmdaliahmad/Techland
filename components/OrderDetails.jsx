import React, { useState } from 'react';
import { useStateContext } from '../context/StateContext';
import styles from '../styles/order/OrderDetails.module.css';


const OrderDetails = ({total,  itemName, itemPrice, itemQty}) => {
    const [customer, setCustomer] = useState("");
    const [email, setEmail] = useState("");
    const [apartment, setApartment] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [news, setNews] = useState((false));
    const [phoneNumber , setPhoneNumber] = useState("");    
    const { createOrder } = useStateContext();

    const handleClick = () => {
      createOrder({  itemName, itemPrice, itemQty, address, phoneNumber, customer, total, email, apartment, city,  news });
    };
  return (

    <div className={styles.container}>  
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Contact information</h1>
            <div className={styles.item}>
                <label>Full Name</label>
                <input placeholder='Full Name' type="text" className={styles.input} onChange={(e) => setCustomer(e.target.value)} />
            </div>
            <div className={styles.item}>
                <label>Email Address</label>
                <input placeholder='Email Address' type="text" className={styles.input} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={styles.item}>
          <label >Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            className={styles.input}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
      <input type="checkbox"       
        label="news"
        value={news}
        onChange={() => setNews(!news)} className={styles.checkbox} /> send me news & offers
    </div>
        <h1 className={styles.title}>Shipping address</h1>
        <div className={styles.item}>
                <label>City</label>
                <input placeholder='City' type="text" className={styles.input} onChange={(e) => setCity(e.target.value)} />
            </div>
        <div className={styles.item}>
          <label >Address</label>
          <input
            rows={5}
            placeholder="Address"
            type="text"
            className={styles.input}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label >Appartment, suite, etc. (optional)</label>
          <input
            rows={5}
            placeholder="Appartment, suite, etc."
            type="text"
            className={styles.input}
            onChange={(e) => setApartment(e.target.value)}
          />
        </div>

        <h3 className={styles.shippingt}>Shipping method</h3>
        <div className={styles.shipping}>
          <h4>(Shipping 4-8 business days) <strong>3$</strong></h4>          
        <label class="container">
        <input type="checkbox" checked="checked"/>
        <span class="checkmark"></span>
        </label>
        </div>
        
        <button className={styles.button} onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>

  );
};

export default OrderDetails;