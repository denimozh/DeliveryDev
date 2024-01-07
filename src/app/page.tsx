import { Hero, AboutUs, Slider } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Slider/>
      <AboutUs/>
    </main>
  )
}
