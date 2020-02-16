import React from 'react'
import PropTypes from 'prop-types'

import useForm from 'react-hook-form'
import { useCycle } from 'framer-motion'
import showdown from 'showdown'

import * as styled from './styled'

const converter = new showdown.Converter()

const variants = {
  open: {
    height: 'auto'
  },
  closed: {
    height: '17px'
  }
}

const Form = ({
  onSubmit,
  isPending,
  success,
  contact_privacy_policy: privacyPolicy,
  clearContactSubmission
}) => {
  const { register, handleSubmit, errors } = useForm()

  const [isOpen, toggleIsOpen] = useCycle(false, true)

  return (
    <styled.Form
      name='contact'
      onSubmit={handleSubmit(onSubmit)}
      method='POST'
      data-netlify='true'
    >
      <input type='hidden' name='form-name' value='contact' />
      {
        success
          ? (
            <div className='container'>
              <div className='grid-noBottom'>
                <div className='col-12'>
                  <styled.Heading>
                    Wiadomość została wysłana
                  </styled.Heading>
                </div>
                <div className='col-9_xs-12'>
                  <styled.Success>
                    Dziękujemy
                  </styled.Success>
                </div>
                <div className='col-12'>
                  <styled.SuccessConfirmation onClick={clearContactSubmission}>
                    Wyślij kolejną wiadomość
                  </styled.SuccessConfirmation>
                </div>
              </div>
            </div>
          )
          : (
            <div className='container'>
              <div className='grid-noBottom'>
                <div className='col-12'>
                  <styled.Heading>
                    Lub skorzystaj z formularza
                  </styled.Heading>
                </div>
                <div className='col-8_xs-12 grid-noBottom'>
                  <div className='col-12'>
                    <styled.Label>
                      Imię i nazwisko <abbr>*</abbr>
                    </styled.Label>
                  </div>
                  <div className='col-6_xs-12'>
                    <styled.Input
                      name='name'
                      placeholder='Imię'
                      ref={register({
                        required: true
                      })}
                    />
                    {errors.name && (
                      <styled.Error>
                        Pole wymagane
                      </styled.Error>
                    )}
                  </div>
                  <div className='col-6_xs-12'>
                    <styled.Input
                      grouped
                      name='surname'
                      placeholder='Nazwisko'
                      ref={register({
                        required: true
                      })}
                    />
                    {errors.surname && (
                      <styled.Error>
                        Pole wymagane
                      </styled.Error>
                    )}
                  </div>
                  <div className='col-12'>
                    <styled.Label>
                      Podaj nam swój adres email i telefon <abbr>*</abbr>
                    </styled.Label>
                  </div>
                  <div className='col-6_xs-12'>
                    <styled.Input
                      name='email'
                      placeholder='Adres e-mail'
                      ref={register({
                        required: true
                      })}
                    />
                    {errors.email && (
                      <styled.Error>
                        Pole wymagane
                      </styled.Error>
                    )}
                  </div>
                  <div className='col-6_xs-12'>
                    <styled.Input
                      grouped
                      name='phone'
                      placeholder='Nr telefonu'
                      ref={register({
                        required: true
                      })}
                    />
                    {errors.phone && (
                      <styled.Error>
                        Pole wymagane
                      </styled.Error>
                    )}
                  </div>
                  <div className='col-12'>
                    <styled.Label>
                      Wiadomość <abbr>*</abbr>
                    </styled.Label>
                  </div>
                  <div className='col-12'>
                    <styled.Textarea
                      name='message'
                      placeholder='Wiadomość'
                      ref={register({
                        required: true
                      })}
                    />
                    {errors.message && (
                      <styled.Error>
                        Pole wymagane
                      </styled.Error>
                    )}
                  </div>
                  <div className='col-12'>
                    <styled.Label>
                      Informacje o prywatności <abbr>*</abbr>
                    </styled.Label>
                  </div>
                  <div className='col-12'>
                    <styled.TextPositioner>
                      <styled.Checkbox
                        id='rodo'
                        name='rodo'
                        ref={register({
                          required: true
                        })}
                      />
                      <styled.CheckboxLabel htmlFor='rodo' />
                      <styled.TextWrapper>
                        <styled.Text
                          initial={false}
                          animate={isOpen ? 'open' : 'closed'}
                          variants={variants}
                          dangerouslySetInnerHTML={{
                            __html: converter.makeHtml(privacyPolicy)
                          }}
                        />
                        <styled.TextToggler onClick={toggleIsOpen}>
                          {`${isOpen ? 'Zwiń' : 'Rozwiń'}`} informację
                        </styled.TextToggler>
                      </styled.TextWrapper>
                      {errors.rodo && (
                        <styled.Error>
                          Pole wymagane
                        </styled.Error>
                      )}
                    </styled.TextPositioner>
                  </div>
                  <div className='col-12'>
                    <styled.Submit isPending={isPending} />
                  </div>
                </div>
              </div>
            </div>
          )
      }
    </styled.Form>
  )
}

Form.propTypes = {
  isPending: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  clearContactSubmission: PropTypes.func.isRequired
}

export default Form
