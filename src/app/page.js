import Hero from '@/components/Hero'
import SummerTips from '@/components/SummerTips'
import TopBrand from '@/components/TopBrands'
import TopProducts from '@/components/TopProducts'
import React from 'react'

export default function Page() {
  return (
    <div>
      <Hero/>
      <TopProducts/>
      <SummerTips/>
      <TopBrand/>
    </div>
  )
}
