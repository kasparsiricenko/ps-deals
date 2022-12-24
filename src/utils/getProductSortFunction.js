export default function getProductSortFunction(ascending, sortBy) {
  switch (sortBy) {
    case 'discount': {
      return (a, b) =>
        ascending
          ? a.price.discountText - b.price.discountText
          : b.price.discountText - a.price.discountText
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
