import React from 'react'
import PropTypes from 'prop-types'
import useForm from 'react-hook-form'

import * as styled from './styled'

const Form = ({
  onSubmit
}) => {
  const { register, handleSubmit, errors } = useForm()

  return (
    <styled.Form
      name='contact'
      onSubmit={handleSubmit(onSubmit)}
      method='POST'
      data-netlify='true'
    >
      <input type='hidden' name='form-name' value='contact' />
      <div className='container'>
        <div className='row'>
          <styled.Input
            name='name'
            placeholder='Imię'
            ref={register({
              required: true
            })}
          />
        </div>
      </div>
    </styled.Form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Form
