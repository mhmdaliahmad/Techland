import React from 'react'
import { Apple } from '../components';

import { client } from '../lib/client'

const AppleProducts = ({apple}) => {
  return (
    <>
      <div className='speak-container'>
      {apple?.map((apple) => <Apple key={apple.id} apple={apple}/> )}
      </div>
    </>
  );
}

export const getStaticProps = async () => {

  const appleQuery = '*[_type == "apple"]';
  const apple = await client.fetch(appleQuery);



  return {
    props: { apple }
  }
  
}
export default AppleProducts;