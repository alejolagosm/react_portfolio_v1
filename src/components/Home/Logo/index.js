import './index.scss'
import logoAl from '../../../assets/img/logoal.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 10,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} src={logoAl} alt="S" className="solid-logo" />
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="559pt"
        height="897pt"
        viewBox="0 0 559 897"
      >
        <g className="svg-container" transform="scale(10)" fill="none">
          <path
            ref={outlineLogoRef}
            d="M 53.564 71.094 L 45.605 49.854 L 10.791 49.854 L 2.881 71.094 L 0 71.094 L 26.611 0 L 29.834 0 L 56.445 71.094 L 53.564 71.094 Z M 28.223 3.174 L 11.768 47.217 L 44.629 47.217 L 28.223 3.174 Z"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
