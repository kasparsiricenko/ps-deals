import { memo } from 'react'
import { trackWindowScroll } from 'react-lazy-load-image-component'
import { makeStyles } from 'tss-react/mui'
import Card from './Card'

function Cards({ products, scrollPosition }) {
  const { classes } = useStyles()

  return (
    <>
      {products.map((product) => (
        <Card product={product} scrollPosition={scrollPosition} />
      ))}
    </>
  )
}

const useStyles = makeStyles()(() => ({}))

export default memo(trackWindowScroll(Cards))
