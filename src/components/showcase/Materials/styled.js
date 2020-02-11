import styled from 'styled-components'

export const Materials = styled.section`
  padding: 1rem 0 3rem;

  @media (min-width: 48rem) {
    padding: 1rem 0 4rem;
  }
`

export const MaterialsLogosWrap = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -1.375rem;

  @media (min-width: 48rem) {
    margin-top: 2rem;
  }
`

export const MaterialsLogo = styled.div`
  flex-basis: 50%;
  max-width: 50%;
  padding: 1rem 1.375rem;

  @media (min-width: 48rem) {
    flex-basis: 25%;
    max-width: 25%;
    padding: 0 1.375rem;
  }
`
