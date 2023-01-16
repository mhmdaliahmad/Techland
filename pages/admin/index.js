import React from "react";
import axios from "axios";
import { useState } from "react";
import styles from "../../styles/Admin.module.css";

const Index = ({ orders }) => {  
  const [orderList, setOrderList] = useState(orders);
  
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/orders/" + id
      );
      setOrderList(orderList.filter((order) => order._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
 


  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <a href="https://techland.sanity.studio/desk">
        <button className={styles.button1}>Manage Items</button>
        </a>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Customer</th>
              <th>Email Address</th>
              <th className={styles.phone}>Phone Number</th>
              <th className={styles.phone}>News</th>
              <th className={styles.city}>City</th>
              <th>Address</th>
              <th>Appartment</th>
              <th>item</th>
              <th className={styles.total}>Total</th>
            </tr>
          </thead>
          {orderList?.map((order) => (
            <tbody key={order._id}>
              <tr className={styles.trTitle}>
                <td className={styles.id} data-label="Customer">{order.customer}</td>
                <td  className={styles.email} data-label="Email Address">{order.email}</td>
                <td className={styles.phone} data-label="Phone Number">{order.phoneNumber}</td>
                <td className={styles.phone} data-label="News">{order.news}</td>
                <td className={styles.address} data-label="City">{order.city}</td>
                <td className={styles.address} data-label="Address">{order.address}</td>
                <td className={styles.address} data-label="Apartment">{order.apartment}</td>
                <td data-label="Item">{order.itemName} ({order.itemPrice}$ x{order.itemQty})</td>
                <td className={styles.total} data-label="Total">${order.total}</td>
                <td>   
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(order._id)}>
                    Delete Order
                  </button>
                  </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const orderRes = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      orders: orderRes.data,
    },    
  };
};

export default Index;