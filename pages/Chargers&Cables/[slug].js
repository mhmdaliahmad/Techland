import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import OrderDetails from '../../components/OrderDetails';
import { client, urlFor } from '../../lib/client';
import {  Charger } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ charger, chargers, }) => {
  const { image, name, details, price, category } = charger;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const [cash, setCash] = useState(false);
  const { totalPrice } = useStateContext();
  const handleBuyNow = () => {
    onAdd(charger, qty);

    setCash(true);
  }

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <h4>Details: </h4>
          <p>{details}</p>
          <h1>{category}</h1>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
        {/*    <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>*/}
            <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {chargers?.map((item) => (
                <Charger key={item._id} charger={item} />
              ))}
            </div>
          </div>
          {cash &&  <OrderDetails total={totalPrice} itemName={charger.slug.current} itemQty={charger.quantity} itemPrice={charger.price} />}

      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const chargerQuery = '*[_type == "charger"]';

  const chargers = await client.fetch(chargerQuery);

  const paths = chargers.map((charger) => ({
    params: { 
      slug: charger.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const chargerQuery = `*[_type == "charger" && slug.current == '${slug}'][0]`;
  const chargerData = '*[_type == "charger"]'
  
  
  const charger = await client.fetch(chargerQuery);
  const chargers = await client.fetch(chargerData);



  console.log(charger);

  return {
    props: { chargers, charger,  }
  }
}


export default ProductDetails