import React from 'react'
import { Head } from '../components';

import { client } from '../lib/client'

const HeadphonesAndSpeakers = ({headphone}) => {
  return (
    <>
      <div className='speak-container'>
      {headphone?.map((headphone) => <Head key={headphone.id} headphone={headphone}/> )}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {

  const headphoneQuery = '*[_type == "headphone"]';
  const headphone = await client.fetch(headphoneQuery);



  return {
    props: { headphone }
  }
  
}
export default HeadphonesAndSpeakers;