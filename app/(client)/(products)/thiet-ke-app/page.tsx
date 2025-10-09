import Hero from './components/Hero'
import Procedure from './components/Procedure'
import Project from './components/Project'
import Ready from './components/Ready'
import Solution from './components/Solution'
import Why from './components/Why'

const DesignAppPage = () => {
  return (
    <div className='flex flex-col gap-14'>
      <Hero />
      <Ready />
      <Why />
      <Procedure />
      <Solution />
      <Project />
    </div>
  )
}

export default DesignAppPage
