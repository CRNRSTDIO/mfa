import React from 'react'
import { Link } from 'gatsby'

import { Button } from '../shared'

import * as styled from './styled'

const NotFound = () => (
  <styled.NotFound>
    <div className='container'>
      <div className='grid-noBottom-middle'>
        <div className='col-4_xs-12'>
          <styled.NotFoundCode>
            404
          </styled.NotFoundCode>
        </div>
        <div className='col-6_xs-12' data-push-left='off-1_xs-0'>
          <styled.NotFoundHeading>
            Nie możemy odnaleźć tej strony
          </styled.NotFoundHeading>
          <styled.NotFoundBody>
            Strona, której szukasz nie istnieje lub wystąpił nieznany błąd. Wróć na stronę główną korzystając z linku poniżej.
          </styled.NotFoundBody>
          <Button as={Link} to='/'>
            Strona główna
          </Button>
        </div>
      </div>
    </div>
  </styled.NotFound>
)

export default NotFound
