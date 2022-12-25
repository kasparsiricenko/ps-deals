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
            <div className={classes.content}>
              <Skeleton className={classes.originalPrice} />
              <Skeleton className={classes.discountedPrice} />
              <Skeleton className={classes.discountPercentage} />
              <Skeleton className={classes.productName} />
            </div>
          </div>
        ))}
      </>
    ),
    []
  )

  return loading && skeletons
}

const useStyles = makeStyles()((theme) => ({
  card: {
    width: 194,
    border: `1px solid ${theme.palette.grey[800]}`,
    borderRadius: 2,
  },
  content: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: 192,
    transform: 'unset',
    borderRadius: 'unset',
  },
  originalPrice: {
    width: 36,
    height: 15,
    alignSelf: 'end',
    transform: 'unset',
    marginTop: 10,
    marginRight: 6,
  },
  discountedPrice: {
    width: 52,
    height: 22,
    alignSelf: 'end',
    transform: 'unset',
    marginRight: 6,
    marginTop: 8,
  },
  discountPercentage: {
    height: 22,
    transform: 'unset',
    width: 55,
    position: 'absolute',
    top: 8,
    left: 4,
  },
  productName: {
    width: 160,
    height: 20,
    margin: 8,
    marginTop: 20,
    transform: 'unset',
    marginBottom: 10,
  },
}))
