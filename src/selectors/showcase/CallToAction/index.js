import { createSelector, createStructuredSelector } from 'reselect'

const getOwnPrice = (_, { price }) => price

const getOwnPriceNew = (_, { price_new: priceNew }) => priceNew

const resolvePrice = createSelector(
  getOwnPrice,
  price => price.trim() !== '' ? price : false
)

const resolveNewPrice = createSelector(
  getOwnPriceNew,
  priceNew => priceNew.trim() !== '' ? priceNew : false
)

export default createStructuredSelector({
  resolvedPrice: resolvePrice,
  resolvedPriceNew: resolveNewPrice
})
