import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import * as colors from '../../../global/variables.module.scss'

export const Form = styled.form`

`

export const Heading = styled.h2`
  color: ${colors.grey};
  display: block;
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0 0 2.125rem;

  @media (min-width: 48rem) {
    font-size: 3.25rem;
    line-height: 3.25rem;
    margin: 0 0 2.375rem;
  }
`

export const Success = styled.h2`
  color: ${colors.red};
  display: block;
  font-size: 1.75rem;
  font-weight: 500;
  margin: 0;
  text-decoration: none;
  word-break: break-word;

  @media (min-width: 48rem) {
    font-size: 5.125rem;
    line-height: 5.125rem;

    :last-child {
      margin-bottom: 20vh;
    }
  }
`

export const SuccessConfirmation = styled.button.attrs({
  type: 'button'
})`
  background-color: transparent;
  border: 0;
  color: ${colors.grey3};
  cursor: pointer;
  font-size: .5rem;
  letter-spacing: .125rem;
  margin: 0;
  outline: 0;
  padding: 0 0 .25rem;
  position: relative;
  text-transform: uppercase;

  ::after {
    background-color: ${colors.grey3};
    bottom: 0;
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    width: 100%;
  }
`

export const Input = styled.input`
  background-color: ${colors.white};
  border: 1px solid ${colors.grey};
  color: ${colors.dark};
  font-size: .9375rem;
  height: 3.75rem;
  outline: 0;
  padding: 0 1.25rem;
  transition: border-color .15s linear;
  width: 100%;
  will-change: border-color;

  ${({ grouped }) => grouped && css`
    margin-top: .25rem;

    @media (min-width: 48rem) {
      margin-top: 0;
    }
  `};

  ::placeholder {
    color: ${colors.grey};
    opacity: 1;
  }

  :hover,
  :focus {
    border-color: ${colors.dark}
  }
`

export const Textarea = styled.textarea`
  background-color: ${colors.white};
  border: 1px solid ${colors.grey};
  color: ${colors.dark};
  font-size: .9375rem;
  min-height: 11.25rem;
  outline: 0;
  padding: 1.125rem 1.25rem;
  transition: border-color .15s linear;
  width: 100%;
  will-change: border-color;

  ::placeholder {
    color: ${colors.grey};
    opacity: 1;
  }

  :hover,
  :focus {
    border-color: ${colors.dark}
  }
`

export const CheckboxLabel = styled.label`
  background-color: ${colors.white};
  border: 1px solid ${colors.grey};
  height: .875rem;
  position: relative;
  transition: border-color .15s linear,
              background-color .15s linear;
  width: .875rem;

  ::after {
    border-bottom: .125rem solid ${colors.white};
    border-right: .125rem solid ${colors.white};
    content: '';
    display: inline-block;
    height: .625rem;
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%) translateY(-1px) rotate(45deg);
    width: .375rem;
  }
`

export const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  opacity: 0;
  pointer-events: none;
  position: absolute;

  :checked + ${CheckboxLabel} {
    background-color: ${colors.red};
    border: 1px solid ${colors.red};
  }
`

export const Submit = styled.input.attrs(({ isPending }) => ({
  type: 'submit',
  value: isPending ? 'Wysyłanie' : 'Wyślij'
}))`
  background-color: ${colors.red};
  border: 0;
  color: ${colors.white};
  font-size: 15px;
  height: 60px;
  margin: 24px 0 0;
  outline: 0;
  padding: 0;
  position: relative;
  width: 100%;

  @media (min-width: 48rem) {
    min-width: 256px;
    width: auto;
  }
`

export const Label = styled.span`
  display: block;
  font-size: .9375rem;
  font-weight: 600;
  margin: 2.25rem 0 1rem;

  abbr {
    color: ${colors.red};
    border: 0;
  }
`

export const Error = styled.p`
  color: ${colors.red};
  flex-basis: 100%;
  font-size: .875rem;
  margin: .25rem 0;
`

export const TextPositioner = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const TextWrapper = styled.div`
  margin: 0 0 0 .625rem;
`

export const Text = styled(motion.div)`
  color: ${colors.grey3};
  font-size: .75rem;
  overflow: hidden;
`

export const TextToggler = styled.button.attrs({
  type: 'button'
})`
  background-color: transparent;
  border: 0;
  color: ${colors.grey3};
  cursor: pointer;
  font-size: .5rem;
  letter-spacing: .125rem;
  margin: 0;
  outline: 0;
  padding: 0 0 .25rem;
  position: relative;
  text-transform: uppercase;

  ::after {
    background-color: ${colors.grey3};
    bottom: 0;
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    width: 100%;
  }
`
