import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            consequatur, accusantium nam magnam provident vitae explicabo
            consectetur nulla! Vero vitae dolores at reiciendis temporibus amet
            dicta culpa, possimus doloribus sit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nisi ad inventore accusantium officia dolore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsa
            porro minus sapiente id iure.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#fff" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#fff" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#fff" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#fff" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#fff" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#fff" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
