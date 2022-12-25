import { memo } from 'react'
import { trackWindowScroll } from 'react-lazy-load-image-component'
import Card from './Card'

function Cards({ products, scrollPosition }) {
  return (
    <>
      {products.map((product) => (
        <Card product={product} scrollPosition={scrollPosition} />
      ))}
    </>
  )
}

export default memo(trackWindowScroll(Cards))
