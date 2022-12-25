const express = require('express')
const requestProducts = require('../utils/requestProducts')
const router = express.Router()

let products = null

module.exports = router.get('/getProducts', async function (req, res, next) {
  if (!products) {
    const { data } = await requestProducts()
    products = data.data.categoryGridRetrieve.products
      .filter((product) => product.price.discountText !== null)
      .map((product) => ({
        ...product,
        media: product.media.find((mediaItem) => mediaItem.role === 'MASTER'),
        price: {
          ...product.price,
          basePrice: Number(product.price.basePrice.substring(1)),
          discountedPrice: Number(product.price.discountedPrice.substring(1)),
          discountPercentage: Number(
            product.price.discountText.substring(
              1,
              product.price.discountText.length - 1
            )
          ),
        },
      }))
  }

  res.json(products)
})
