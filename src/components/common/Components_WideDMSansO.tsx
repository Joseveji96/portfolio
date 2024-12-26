import React from 'react'

interface WideDMSansOProps {
  width: number
  height: number
}

const WideDMSansO: React.FC<WideDMSansOProps> = ({ width, height }) => {
  const strokeWidth = height * 0.09
  const innerWidth = width - strokeWidth
  const innerHeight = height - strokeWidth

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`
          M ${width / 2} ${strokeWidth / 2}
          C ${width * 0.75} ${strokeWidth / 2}, ${width - strokeWidth / 2} ${height * 0.25}, ${width - strokeWidth / 2} ${height / 2}
          C ${width - strokeWidth / 2} ${height * 0.75}, ${width * 0.75} ${height - strokeWidth / 2}, ${width / 2} ${height - strokeWidth / 2}
          C ${width * 0.25} ${height - strokeWidth / 2}, ${strokeWidth / 2} ${height * 0.75}, ${strokeWidth / 2} ${height / 2}
          C ${strokeWidth / 2} ${height * 0.25}, ${width * 0.25} ${strokeWidth / 2}, ${width / 2} ${strokeWidth / 2}
          Z
        `}
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

export default WideDMSansO

