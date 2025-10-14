import Hero from './components/Hero'
import Hosting from './components/Hosting'
import ServerPackage from './components/ServerPackage'
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
      <div className='h-20 bg-white'>

      </div>
    </div>
  )
}

export default RentAServerPage
