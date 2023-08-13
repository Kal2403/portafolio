import React from 'react'
import './Icons.css'
import github from '../../assets/github.svg'
import linkedin from '../../assets/Linkedin icon.svg'
import angelist from '../../assets/angellist.svg'
import twitter from '../../assets/twitter.svg'
import gmail from '../../assets/medium.svg'

const Icons = () => {
  return (
    <div className='icons-container'>
      <li><a href=""><img src={github} alt="github" /></a></li>
      <li><a href=""><img src={linkedin} alt="linkedin" /></a></li>
      <li><a href=""><img src={angelist} alt="angelist" /></a></li>
      <li><a href=""><img src={twitter} alt="twitter" /></a></li>
      <li><a href=""><img src={gmail} alt="gmail" /></a></li>
    </div>
  )
}

export default Icons