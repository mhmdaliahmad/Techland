import React, {useState} from "react";
import styles from "../../styles/Order.module.css";
import axios from "axios";

const Order = ({order}) => {
  const [orderList, setOrderList] = useState(order);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Customer</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Item</th>
              <th>Total</th>
            </tr>
            {orderList.articles?.map((orders) => (

            <tr className={styles.tr}>
              <td>
                <span className={styles.name}>{orders.customer}</span>
              </td>  
              <td>
                <span className={styles.total}>{orders.phoneNumber}</span>
              </td>
              <td>
                <span className={styles.address}>{orders.address}</span>
              </td>
              <td>
                <span className={styles.address}>{orders.itemName} ({orders.itemPrice}$) (x{orders.itemQty}) </span>
              </td>
              <td>
                <span className={styles.address}>{orders.total}</span>
              </td>
            </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};

export default Order;