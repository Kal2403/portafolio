import React from 'react'
import Nav from '../../components/Nav/Nav'
import './Home.css'
import Icons from '../../components/Icons/Icons'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-container_text'>
        <h1>Hey there. I'm Cristhian. <br /><span className='developer-text'>I'm a software developer</span></h1>
        <p> I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don't hesitate to contact me.</p>
      </div>
      <Icons />
    </div>
  )
}

export default Home;