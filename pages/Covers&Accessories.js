import React from 'react'
import { Cover } from '../components';

import { client } from '../lib/client'

const CoverAndAccessories = ({cover}) => {
  return (
    <>
      <div className='speak-container'>
      {cover?.map((cover) => <Cover key={cover.id} cover={cover}/> )}
      </div>
    </>
  );
}

export const getStaticProps = async () => {

  const coverQuery = '*[_type == "cover"]';
  const cover = await client.fetch(coverQuery);



  return {
    props: { cover }
  }
  
}
export default CoverAndAccessories;