import styled from 'styled-components'
import * as colors from '../../../global/variables.scss'

export const Label = styled.span`
  color: ${colors.grey};
  display: block;
  font-size: .625rem;
  letter-spacing: .625rem;
  text-transform: uppercase;
`

export const LabelText = styled.div`
  padding: 1.25rem 0 0;
  position: relative;

  ::before {
    background-color: ${colors.grey};
    content: '';
    display: inline-block;
    height: 1px;
    left: 0;
    position: absolute;
    top: 0;
    width: .875rem;
  }
`
