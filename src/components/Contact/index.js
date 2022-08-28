import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  function sendEmail(e) {
    e.preventDefault()
    //The template_id and user_token are obtained when you sign up for an account in the emailjs library website
    emailjs
      .sendForm('gmail', 'template_id', refForm.current, 'user_token')
      .then(
        () => {
          alert('message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('failed to send message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <div>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'Contact Me'.split('')}
                idx={15}
              />
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus recusandae sit molestiae tempore assumenda fugit vitae
              velit dolores vel tenetur!
            </p>
          </div>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="What do you want to talk about?"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" value="SEND" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map">
          <div className="info-map">
            Alejandro Lagos
            <br />
            Bogotá, Colombia
            <span>alejandrolagos.dev@gmail.com</span>
          </div>
          <div className="map-wrap">
            <MapContainer center={[4.7, -74.1]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[4.7, -74.1]}>
                <Popup>I live here, contact me when you are in town!</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
