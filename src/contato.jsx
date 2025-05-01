import styled from "styled-components";

export default function Contato() {
    return (
      <Container> 
        <h1> CONTATO </h1>
        <h2> wawaw@wawaw.com </h2>
      </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 300px;
    color: white;
    background-color:#1C1C1C;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`