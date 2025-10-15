import CTAFooter from './components/CTAFooter'
import Hero from './components/Hero'
import Hosting from './components/Hosting'
import Other from './components/Other'
import Partner from './components/Partner'
import ServerPackage from './components/ServerPackage'
import Service from './components/Service'
import Wave from './components/Wave'
import Why from './components/Why'

const RentAServerPage = () => {
  return (
    <div className='flex flex-col gap-6 xl:gap-14 overflow-hidden'>
      <Hero />
      <ServerPackage />
      <Hosting />
      <Why />
      <Wave />
      <Service />
      <Other />
      <Partner />
      <CTAFooter />
    </div>
  )
}

export default RentAServerPage
