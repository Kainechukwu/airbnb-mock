import React from 'react'
import { Icon } from '@iconify/react'
type IconProps = {
  icon: any
  className?: any
  width?: any
  rotate?: any
  hFlip?: any
  vFlip?: any
}
const Icons = ({ icon, className, width, rotate, hFlip, vFlip }: IconProps) => {
  return (
    <>
      <Icon
        width={width}
        rotate={rotate}
        hFlip={hFlip}
        icon={icon}
        className={className}
        vFlip={vFlip}
      />
    </>
  )
}

export default Icons
