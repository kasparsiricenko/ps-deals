import { Button, Container } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import axios from 'axios'
import React, { useState } from 'react'
import getSortedProducts from './utils/getSortedProducts'
import ReverseButton from './components/ReverseButton'
import ToggleButton from './components/ToggleButton'
import Cards from './components/Cards'
import SkeletonCards from './components/SkeletonCards'
import { productsMock } from './__mocks__/products.mock'

export default function App() {
  const { classes } = useStyles()
  const [rawProducts, setRawProducts] = useState(productsMock)
  const [products, setProducts] = useState([])
  const [sortBy, setSortBy] = useState('discount')
  const [ascending, setAscending] = useState(false)
  const [loading, setLoading] = useState(true)

  // React.useEffect(() => {
  //   axios.get('./getProducts').then((response) => {
  //     setRawProducts(response.data)
  //   })
  // }, [])

  React.useEffect(() => {
    setProducts(getSortedProducts(rawProducts, ascending, sortBy))
    setLoading(false)
  }, [rawProducts, sortBy, ascending])

  return (
    <Container maxWidth="lg" className={classes.root}>
      <header className={classes.header}>
        <span className={classes.name}>PS DEALS</span>
        <div />
        <ToggleButton
          toggled={sortBy === 'discount'}
          onClick={() => {
            if (sortBy !== 'discount') {
              setLoading(true)
              setSortBy('discount')
            }
          }}
        >
          Discount %
        </ToggleButton>
        <ToggleButton
          toggled={sortBy === 'price'}
          onClick={() => {
            if (sortBy !== 'price') {
              setLoading(true)
              setSortBy('price')
            }
          }}
        >
          Price
        </ToggleButton>
        <ReverseButton
          toggled={ascending}
          onClick={() => {
            setLoading(true)
            setAscending((prev) => !prev)
          }}
        />
      </header>
      <div className={classes.scroll}>
        <SkeletonCards loading={loading} />
        {!loading && <Cards products={products} />}
      </div>
    </Container>
  )
}

const useStyles = makeStyles()((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontWeight: 700,
    fontSize: 20,
    flexShrink: 0,
  },
  header: {
    flex: '0 0 70px',
    display: 'flex',
    gap: 16,
    position: 'sticky',
    top: 0,
    background: theme.palette.background.default,
    zIndex: 10,
    alignItems: 'center',
    borderBottom: '1px solid rgba(144, 202, 249, 0.5)',
  },
  scroll: {
    display: 'flex',
    gap: 24,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    overflowY: 'scroll',
    paddingTop: 24,
    paddingBottom: 80,
    flex: '1 1 0',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
}))
