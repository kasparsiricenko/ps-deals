import { useEffect, useState } from 'react'
import { makeStyles } from 'tss-react/mui'
import axios from 'axios'

import useLocalStorage from './hooks/useLocalStorage'

import { Container } from '@mui/material'
import getSortedProducts from './utils/getSortedProducts'
import ReverseButton from './components/ReverseButton'
import ToggleButton from './components/ToggleButton'
import Cards from './components/Cards'
import SkeletonCards from './components/SkeletonCards'

export default function App() {
  const { classes } = useStyles()
  const [rawProducts, setRawProducts] = useState([])
  const [products, setProducts] = useState([])
  const [sortBy, setSortBy] = useLocalStorage('sortBy', 'discount')
  const [ascending, setAscending] = useLocalStorage('ascending', false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('./getProducts').then((response) => {
      setRawProducts(response.data)
    })
  }, [])

  useEffect(() => {
    const newProducts = getSortedProducts(rawProducts, ascending, sortBy)
    if (newProducts.length) {
      setProducts(newProducts)
      setLoading(false)
    }
  }, [rawProducts, sortBy, ascending])

  return (
    <Container maxWidth="lg" className={classes.root}>
      <header className={classes.header}>
        <h1 className={classes.name}>
          <a href={'/'}>PS&nbsp;&nbsp;&nbsp;Deals</a>
        </h1>
        <div className={classes.space} />
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
    fontSize: 36,
    flexShrink: 1,
    minWidth: 0,
    fontFamily: 'cyberpunk',
    margin: 0,
    '& > a': {
      color: 'white !important ',
      textDecoration: 'unset !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '6vw',
    },
  },
  space: {
    width: 50,
    flex: '0 1 50',
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
