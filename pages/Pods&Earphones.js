import React from 'react'
import { Pod } from '../components';

import { client } from '../lib/client'

const PodsAndEarPhones = ({pod}) => {
  return (
    <>
      <div className='speak-container'>
      {pod?.map((pod) => <Pod key={pod.id} pod={pod}/> )}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {

  const podQuery = '*[_type == "pod"]';
  const pod = await client.fetch(podQuery);



  return {
    props: { pod }
  }
  
}
export default PodsAndEarPhones;