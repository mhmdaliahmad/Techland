import React from 'react'

import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner, Categories, Speak, Apple, Pod, Tab, Cover, Pc, Charger } from '../components';

const Home = ({products, bannerData, speaker, apple, pod, tab, cover,pc, charger}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
      <Categories/>
      <div className='products-heading'>
        <h2 className='product-header'>Best Selling Products</h2>
      </div>

      <div className='products-container'>
      {products?.map((product) => <Product key={product.id} product={product}/> )}
      </div>
      <div className="maylike-index-wrapper">
          <h2>Electronics</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
            {speaker?.map((speaker) => <Speak key={speaker.id} speaker={speaker}/> )}
            </div>
          </div>
      </div>
      <div className="maylike-index-wrapper">
          <h2>Apple Products</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {apple?.map((apple) => (
                <Apple key={apple.id} apple={apple} />
              ))}
            </div>
          </div>
      </div>
      <div className="maylike-index-wrapper">
          <h2>Pods & Earphones</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {pod?.map((pod) => (
                <Pod key={pod.id} pod={pod} />
              ))}
            </div>
          </div>
      </div>
      <div className="maylike-index-wrapper">
          <h2>Warrables & Tabs</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {tab?.map((tab) => (
                <Tab key={tab.id} tab={tab} />
              ))}
            </div>
          </div>
      </div>
      <div className="maylike-index-wrapper">
          <h2>Covers, Accessories & more</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {cover?.map((cover) => (
                <Cover key={cover.id} cover={cover} />
              ))}
            </div>
          </div>
      </div>
      <div className="maylike-index-wrapper">
          <h2>PC & Laptop parts & accessories</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {pc?.map((pc) => (
                <Pc key={pc.id} pc={pc} />
              ))}
            </div>
          </div>
      </div>
      <div className="maylike-index-wrapper">
          <h2>Chargers, Cables & Connectors</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {charger?.map((charger) => (
                <Charger key={charger.id} charger={charger} />
              ))}
            </div>
          </div>
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
}

export const getServerSideProps = async () => {

  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const speakerQuery = '*[_type == "speaker"]';
  const speaker = await client.fetch(speakerQuery);


  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const appleQuery = '*[_type == "apple"]';
  const apple = await client.fetch(appleQuery);

  const podQuery = '*[_type == "pod"]';
  const pod = await client.fetch(podQuery);

  const tabQuery = '*[_type == "tab"]';
  const tab = await client.fetch(tabQuery);

  const coverQuery = '*[_type == "cover"]';
  const cover = await client.fetch(coverQuery);

  const pcQuery = '*[_type == "pc"]';
  const pc = await client.fetch(pcQuery);

  const chargerQuery = '*[_type == "charger"]';
  const charger = await client.fetch(chargerQuery);




  return {
    props: { products , bannerData, speaker, apple, pod, tab, cover, pc, charger }
  }
  
}
export default Home;