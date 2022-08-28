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
        duration: 4,
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
        width="116.4"
        height="71"
        viewBox="0 0 116.4 71"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="svgGroup"
          className="svg-container"
          transform=" scale(0.5 0.5)"
          stroke-linecap="round"
          fill-rule="evenodd"
          font-size="9pt"
          stroke="#000"
          stroke-width="0.25mm"
          fill="#000"
          style={{ stroke: '#000', strokeWidth: '0.25mm', fill: '#0000' }}
        >
          <path
            ref={outlineLogoRef}
            style={{ strokeDasharray: '500px 500px' }}
            d="M 64.8 67.5 L 56.1 71 L 48.3 51 L 15.9 51 L 8.1 70.8 L 0 67.5 L 27.4 0 L 37.8 0 L 64.8 67.5 Z M 116.4 70 L 74.8 70 L 74.8 0 L 84.3 0 L 84.3 61.5 L 116.4 61.5 L 116.4 70 Z M 32.1 9.4 L 18.9 43 L 45.2 43 L 32.1 9.4 Z"
            vector-effect="non-scaling-stroke"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
