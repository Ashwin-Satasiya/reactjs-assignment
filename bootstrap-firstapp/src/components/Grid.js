import React from 'react';

import { Container, Row} from 'react-bootstrap';

export default function Grid() {
  return (
    <div>

        <Container>
            <Row>

            <div className='col-md-4 mt-4 p-3 bg-primary '>
                One
            </div>
            <div className='col-md-4 mt-4 p-3 bg-secondary'>
                Two
            </div>
            <div className='col-md-4 mt-4 p-3 bg-success'>
                Three
            </div>
        
            </Row>
        </Container>

    </div>
  )
}
