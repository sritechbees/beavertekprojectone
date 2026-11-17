import React from 'react'
import IndustriesHero from './industries-hero'
import { IndustriesGrid } from './industries-grid'
import IndustriesFocus from './industries-focus'
import App_layout from '@/component/layout/app_layout'
import { IndustriesCTA } from './industries-cta'

function Industryhero() {
  return (
    <div>
      <App_layout>
      <IndustriesHero/>
      <IndustriesGrid/>
      <IndustriesFocus/>
      <IndustriesCTA/>
      </App_layout>
    </div>
  )
}

export default Industryhero