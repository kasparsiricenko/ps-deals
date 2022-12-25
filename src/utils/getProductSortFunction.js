export default function getProductSortFunction(ascending, sortBy) {
  switch (sortBy) {
    case 'discount': {
      return (a, b) =>
        ascending
          ? a.price.discountPercentage - b.price.discountPercentage
          : b.price.discountPercentage - a.price.discountPercentage
    }
    case 'price': {
      return (a, b) =>
        ascending
          ? a.price.discountedPrice - b.price.discountedPrice
          : b.price.discountedPrice - a.price.discountedPrice
    }
    default:
      throw Error('sortBy')
  }
}
