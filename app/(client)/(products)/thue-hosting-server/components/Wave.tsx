'use client'

const Wave = () => {
  return (
    <svg
      className="relative w-full h-[10vh] min-h-[100px] max-h-[150px] -mb-2"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18L192 44L-160 44Z"
        />
      </defs>
      <g>
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="0"
          className="wave-2 fill-[#BA90FF]/10"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="3"
          className="wave-3 fill-[#BA90FF]/40"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="5"
          className="wave-4 fill-white"
        />
      </g>
    </svg>
  )
}

export default Wave
