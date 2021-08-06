import React, { Component } from 'react'
import {
  Caption,
  Container,
  Heading,
  ColumnLeft,
  ColumnRight,
  
} from './aboutus.style'

// eslint-disable-next-line react/prefer-stateless-function
class About extends Component {
  render() {
    return (
      <>
        <Container>
          <Heading>About Us</Heading>
          <ColumnLeft>
            <img width="100%" src="/images/pablita-finance.png" alt='about this app'/>
          </ColumnLeft>
          <ColumnRight>
            <Caption>
              Job Tracker is a simple web app for tracking hours and status for
              job hunting. This is designed for all people who needs to see the
              status for each application. This is made by Coding_Junkie99,
              ChunkyCaptionumpkinhead, Olivia C., R2rito and Chi as one of the{' '}
              <a href="https://chingu.io/">Chingu</a> project.
            </Caption>
            <Caption>
              Illustration by{' '}
              <a href="https://icons8.com/illustrations/author/5bf673a26205ee0017636674">
                Anna Golde
              </a>{' '}
              from <a href="https://icons8.com/illustrations">Ouch!</a>
            </Caption>
          </ColumnRight>
        </Container>
      </>
    );
  }
}

export default About;
