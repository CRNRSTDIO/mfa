import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

const Select = ({
  selectedOption,
  setSelectToAll,
  setSelectToSell
}) => (
  <>
    <Button isActive={!!selectedOption} onClick={setSelectToAll}>Wszystkie Domy</Button>
    <Button isActive={!selectedOption} onClick={setSelectToSell}>Domy na sprzedaż</Button>
  </>
)

Select.propTypes = {
  selectedOption: PropTypes.number.isRequired,
  setSelectToAll: PropTypes.func.isRequired,
  setSelectToSell: PropTypes.func.isRequired
}

export default Select
