
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import Header from '@/components/header'
import Hero from '@/components/hero'
import UpcomingEvents from '@/components/upcoming-events'
import Galleries from '@/components/galleries'
import CustomTrip from '@/components/custom-trip'


export default async function HomePage() {


  // useEffect(() => {
  //   const root = window.document.documentElement
  //   root.classList.remove("light", "system")
  //   root.classList.add("dark")
  // }, [])
  //
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 100)
  //   }
  //
  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [])



  return (
    <div className="min-h-screen w-full relative bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
        }}
      />
      <Header/>
      <Hero/>
      <UpcomingEvents/>
      <Galleries/>
      <CustomTrip/>

    </div>
  )
}
