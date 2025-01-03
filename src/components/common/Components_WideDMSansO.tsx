import React from 'react'

interface WideDMSansOProps {
  width: number
  height: number
  style?: 'thin' | 'normal' | 'bold' | 'extra'
}

const WideDMSansO: React.FC<WideDMSansOProps> = ({ width, height, style = 'normal' }) => {
  let strokeWidth: number
  switch (style) {
    case 'thin':
      strokeWidth = height * 0.06
      break
    case 'bold':
      strokeWidth = height * 0.12
      break
    case 'extra':
      strokeWidth = height * 0.20
      break
    default:
      strokeWidth = height * 0.09
  }
  const radius = (height - strokeWidth) / 2
  const centerX = width / 2
  const centerY = height / 2
  const gapWidth = Math.max(0, width - height)

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d={`
          M ${strokeWidth / 2} ${centerY}
          A ${radius} ${radius} 0 0 1 ${height / 2} ${strokeWidth / 2}
          H ${width - height / 2}
          A ${radius} ${radius} 0 0 1 ${width - strokeWidth / 2} ${centerY}
          A ${radius} ${radius} 0 0 1 ${width - height / 2} ${height - strokeWidth / 2}
          H ${height / 2}
          A ${radius} ${radius} 0 0 1 ${strokeWidth / 2} ${centerY}
          Z
        `}
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

export default WideDMSansO

