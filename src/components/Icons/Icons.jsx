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
      <li><a href="https://github.com/Kal2403"><img src={github} alt="github" /></a></li>
      <li><a href="https://www.linkedin.com/in/cristhian-castillo-alfaro-41136322a/"><img src={linkedin} alt="linkedin" /></a></li>
      <li><a href="https://www.angellist.com/"><img src={angelist} alt="angelist" /></a></li>
      <li><a href="https://x.com/KalTech2403"><img src={twitter} alt="twitter" /></a></li>
      <li><img src={gmail} alt="gmail" /></li>
    </div>
  )
}

export default Icons;
