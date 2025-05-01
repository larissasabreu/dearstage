import styled from "styled-components";

export default function NavBar() {
    return (
        <Container> 
            <Novidades> NOVIDADES </Novidades>
            <Artistas> ARTISTAS </Artistas>
            <Localização> LOCALIZAÇÃO </Localização>
            <Ingressos> INGRESSOS </Ingressos>
            <Contato> CONTATO </Contato>
        </Container>
    );
}

const Container = styled.div`
    height: 67px;
    width: 100%;
    background-color:#1C1C1C;
    color: white;
    top: 0;
    position: fixed;
    font-size: 15px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    z-index: 5;
`
const Novidades = styled.div`
    padding-right: 50px;
    cursor: pointer;
    &:hover {
    color: red;
  }
`

const Artistas = styled.div`
    padding-right: 50px;
    cursor: pointer;
    &:hover {
    color: #ff5bc8;
  }
`
const Localização = styled.div`
    padding-right: 50px;
    cursor: pointer;
    &:hover {
    color: #ca5fff;
  }
`

const Ingressos = styled.div`
    padding-right: 50px;
    cursor: pointer;
    &:hover {
    color: #2f4aff;
  }
`

const Contato = styled.div`
    padding-right: 50px;
    cursor: pointer;
    &:hover {
    color: #43caff;
  }
`