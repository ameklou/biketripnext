import React from 'react'
import Header from '@/components/header'
import LBTHero from '@/app/(frontend)/lome-bike-tour/lbt-hero'
import { TestimonialsSection } from '@/app/(frontend)/lome-bike-tour/photos'
import HowWorks from '@/app/(frontend)/lome-bike-tour/how-works'
import Footer from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { SocialProof } from '@/components/social-proof'
import SomeHero from '@/components/SomeHero'
import LbtRegistrationForm from '@/app/(frontend)/lome-bike-tour/lbt-registration-form'
import Registration from '@/app/(frontend)/lome-bike-tour/Registration'

const Page = () => {

  return (
    <div className="min-h-screen w-full relative bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
        }}
      />
      <Header/>
      <SomeHero title={"Lome Bike tour 3"} description={"Faire le tour de lome à velo"} imageSrc={"/bike-ride.svg"}/>



      <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 mt-30" delay={0.1}>
        <SocialProof />
      </AnimatedSection>
      <HowWorks/>
      <TestimonialsSection/>

      <Footer/>

    </div>
  )
}

export default Page