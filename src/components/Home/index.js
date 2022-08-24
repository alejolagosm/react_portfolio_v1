import './index.scss'
import { Link } from 'react-router-dom'
import LogoAL from '../../assets/img/logoal.png'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['A', 'L', 'E', 'J', 'O']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <img src={LogoAL} alt="developer" />
        <h1>
          Hello, I'm &nbsp;
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <h2>Front-end developer and data Wizard</h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
