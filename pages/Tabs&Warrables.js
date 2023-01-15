import React from 'react'
import { Tab } from '../components';

import { client } from '../lib/client'

const TabsAndWarrables = ({tab}) => {
  return (
    <>
      <div className='speak-container'>
      {tab?.map((tab) => <Tab key={tab.id} tab={tab}/> )}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {

  const tabQuery = '*[_type == "tab"]';
  const tab = await client.fetch(tabQuery);



  return {
    props: { tab }
  }
  
}
export default TabsAndWarrables;