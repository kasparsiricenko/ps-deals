import getProductSortFunction from './getProductSortFunction'

export default function getSortedProducts(products, ascending, sortBy) {
  return [...products].sort(getProductSortFunction(ascending, sortBy))
}
