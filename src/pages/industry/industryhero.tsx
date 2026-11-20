import React from 'react'


import App_layout from '@/component/layout/app_layout'

import IndustryHero from './industryherosection'
import IndustryProof from './insudtryproof'
import IndustrySolutions from './industrysolutions'

import Head from 'next/head'

function Industryhero() {
  return (
    <div>
      <App_layout>
        <Head>
      <title>Beavertek |  Industries</title>
      </Head>
     
    <IndustryHero/>
    <IndustryProof/>
    <IndustrySolutions/>
    
      </App_layout>
    </div>
  )
}

export default Industryhero