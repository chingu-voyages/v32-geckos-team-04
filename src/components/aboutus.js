import { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './aboutus.css';

// eslint-disable-next-line react/prefer-stateless-function
class About extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md="12">
              <h1>About Us</h1>
            </Col>
            <Row style={{ marginTop: '5%' }}>
              <Col xs="12" md="6">
                <img width="100%" src="/images/pablita-finance.png" alt="About" />
              </Col>
              <Col xs="12" md="6">
                <p>
                  Job Tracker is a simple web app for tracking hours and status
                  for job hunting. This is designed for all people who needs to
                </p>
                <p>
                  This is made by <strong>Coding_Junkie99#6562</strong>,{' '}
                  <strong>Chunkypumpkinhead#4533</strong>,{' '}
                  <strong>Olivia C.#3280</strong>, and <strong>Chi#2659</strong>{' '}
                  as one of the <a href="https://chingu.io/">Chingu</a> project.
                </p>
                <div className="caption">
                  Illustration by{' '}
                  <a href="https://icons8.com/illustrations/author/5bf673a26205ee0017636674">
                    Anna Golde
                  </a>{' '}
                  from <a href="https://icons8.com/illustrations">Ouch!</a>
                </div>
              </Col>
            </Row>
            <Col />
          </Row>
        </Container>
      </>
    );
  }
}

export default About;
