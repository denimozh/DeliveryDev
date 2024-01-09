import { Hero, AboutUs, Slider, PopularNow } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Slider/>
      <AboutUs/>
      <PopularNow/>
    </main>
  )
}
