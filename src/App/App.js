import styled, { keyframes } from 'styled-components';
import logo from '../logo.svg';

const LogoAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  & .App-link {
    color: #61dafb;
  }
`;

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${LogoAnimation} infinite 20s linear;

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: ${LogoAnimation} infinite 20s linear;
    }
  }
`;

function App() {
  return (
    <Container>
      <AppHeader className="App-header">
        <Logo src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </AppHeader>
    </Container>
  );
}

export default App;
