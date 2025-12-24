import React from 'react'
import AnimatedRandomText from '../components/AnimatedRandomText'
import HeaderContainer from '../components/HeaderContainer'
import TextArrow from '../components/TextArrow'
import IconButton from '../components/IconButton'
import { SquareArrowOutUpRight, Github, House } from 'lucide-react'
import Workplaces from '../components/home/Workplaces'
import Technologies from '../components/home/Technologies'

function Home() {
  return (
    <div className='w-full h-full relative'>




      <HeaderContainer>
        <div className='mt-24 max-w-3/4 md:max-w-2/4 mx-auto' id='header'>
          <p className='text-emerald-500 text-6xl md:text-8xl h-98 font-pixel'> <AnimatedRandomText messages={[
            "Hello, I'm Jayox.",
            "I'm a passionate Full-Stack Developer.",
            "Also a tech enthusiast and lifelong learner.",
            "Backend, frontend, mobile apps, and more.",
            "Let's build something amazing together!"
          ]} /></p>


          <TextArrow pixels={6}><p className='text-gray-300 text-sm uppercase'><AnimatedRandomText messages={"About me"} /></p></TextArrow>
          <div>
            <p className='mt-4 text-lg leading-relaxed'>
              I'm Javier, a dedicated Full-Stack Developer with a passion for crafting seamless web and mobile experiences. With expertise in both frontend and backend technologies, I thrive on turning ideas into reality. Whether it's building responsive websites or dynamic applications, I'm committed to delivering high-quality solutions that exceed expectations. Let's connect and create something extraordinary together!
            </p>
          </div>

          <div className='flex flex-row gap-6 items-center mt-8'>
            <IconButton>
              <a href="https://github.com/jallox" className='font-medium'><Github /></a>
            </IconButton>
            <p className='text-gray-500 text-sm'>More buttons coming soon... 👀</p>
          </div>
        </div>
      </HeaderContainer>



      <Workplaces />

      <p className='text-4xl md:text-6xl h-34 font-pixel mt-32'> <AnimatedRandomText messages={
        "Let's build something amazing together!"} /></p>

      <Technologies />


    </div>
  )
}

export default Home