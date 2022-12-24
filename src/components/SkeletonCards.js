import { Skeleton } from '@mui/material'
import { useMemo } from 'react'
import { makeStyles } from 'tss-react/mui'

export default function SkeletonCards({ loading }) {
  const { classes } = useStyles()

  const skeletons = useMemo(
    () => (
      <>
        {Array.from(Array(30)).map(() => (
          <div className={classes.card}>
            <Skeleton className={classes.image} />
            <Skeleton className={classes.originalPrice} />
            <Skeleton className={classes.discountedPrice} />
            <Skeleton className={classes.discountPercentage} />
            <Skeleton className={classes.productName} />
          </div>
        ))}
      </>
    ),
    []
  )

  return loading && skeletons
}

const useStyles = makeStyles()(() => ({
  card: {
    width: 192,
    minHeight: 304,
    position: 'relative',
    display: 'grid',
    gridTemplateRows: '192px 20px 25px 1fr',
    alignItems: 'center',
  },
  image: {
    width: 192,
    height: 192,
    minWidth: 192,
    minHeight: 192,
  },
  originalPrice: {
    width: 40,
    height: 15,
  },
  discountedPrice: {
    width: 70,
    height: 24,
  },
  discountPercentage: {
    height: 20,
    width: 70,
    position: 'absolute',
    top: '194px',
  },
  productName: {
    width: 140,
    height: 24,
  },
}))
