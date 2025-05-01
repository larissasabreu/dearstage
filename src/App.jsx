import styled from 'styled-components';
import Logo from './assets/LOGOplaceholder.png';
import './App.css';
import NavBar from './navbar.jsx';
import Novidades from './novidades.jsx';
import Contato from './contato.jsx';

function App() {

  return (
    <>
      <div>
        <Container>
        <a href="" target="">
          <img src={Logo} class="logo"/>
        </a>
        </Container>
      </div>
      <NavBar/>
      <Novidades/>
      <Contato/>
    </>
  )
}

export default App

const Container = styled.div`
  text-align: center;
  background-color:#1C1C1C;
`