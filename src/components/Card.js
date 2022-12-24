import { LazyLoadImage } from 'react-lazy-load-image-component'
import { makeStyles } from 'tss-react/mui'

export default function Card({ product, scrollPosition }) {
  const { classes } = useStyles()
  return (
    <div className={classes.root}>
      <LazyLoadImage
        alt=""
        src={
          product.media.find((media) => media.role === 'MASTER').url + '?w=210'
        }
        width={'100%'}
        height={192}
        scrollPosition={scrollPosition}
      />
      <div className={classes.content}>
        <div className={classes.originalPrice}>€{product.price.basePrice}</div>
        <div className={classes.discountedPrice}>
          €{product.price.discountedPrice}
        </div>
        <div className={classes.discountPercentage}>
          -{product.price.discountText}%
        </div>
        <div className={classes.productName}>{product.name}</div>
      </div>
    </div>
  )
}

const useStyles = makeStyles()((theme) => ({
  root: {
    width: 194,
    alignItems: 'center',
    justifyContent: 'stretch',
    border: `1px solid ${theme.palette.grey[800]}`,
    borderRadius: 2,
  },
  content: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  originalPrice: {
    display: 'flex',
    justifyContent: 'end',
    textDecoration: 'line-through',
    color: theme.palette.text.secondary,
    paddingRight: 6,
  },
  discountedPrice: {
    display: 'flex',
    justifyContent: 'end',
    fontWeight: 500,
    fontSize: 20,
    paddingRight: 6,
  },
  discountPercentage: {
    position: 'absolute',
    top: 4,
    left: 4,
    padding: '0 8px',
    fontWeight: 700,
    color: theme.palette.grey[100],
    background: 'rgb(24,154,211)',
  },
  productName: {
    whiteSpace: 'wrap',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    padding: '8px',
  },
}))
