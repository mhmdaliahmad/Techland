import React from 'react'
import { Charger } from '../components';

import { client } from '../lib/client'

const ChargersAndCables = ({charger}) => {
  return (
    <>
      <div className='speak-container'>
      {charger?.map((charger) => <Charger key={charger.id} charger={charger}/> )}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {

  const chargerQuery = '*[_type == "charger"]';
  const charger = await client.fetch(chargerQuery);



  return {
    props: { charger }
  }
  
}
export default ChargersAndCables;