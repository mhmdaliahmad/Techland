import React from 'react'
import { Pc } from '../components';

import { client } from '../lib/client'

const PcAndLaptop = ({pc}) => {
  return (
    <>
      <div className='speak-container'>
      {pc?.map((pc) => <Pc key={pc.id} pc={pc}/> )}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {

  const pcQuery = '*[_type == "pc"]';
  const pc = await client.fetch(pcQuery);



  return {
    props: { pc }
  }
  
}
export default PcAndLaptop;