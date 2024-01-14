/* eslint-disable eol-last */
import clsx from 'clsx'
import { useState } from 'react'

import ProductImage from '../../item/ProductImage/ProductImage'

function ItemPreview({ id, name, images, ...props }) {
  const [isHovered, setIsHovered] = useState(false)
  const styleHover = `absolute inset-0 transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return (
    <div
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {images && images[0] && (
        <ProductImage
          id={id}
          src={images[0]}
          alt={name}
          className={props.className}
        />
      )}
      {images && images[1] && (
        <ProductImage
          id={id}
          src={images[1]}
          alt={name}
          className={clsx(styleHover, props.className)}
        />
      )}
    </div>
  )
}

export default ItemPreview
