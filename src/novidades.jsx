import styled from "styled-components";

export default function Novidades() {
    return (
      <Container> 
        <h1> NOVIDADES </h1>
        <h2> Em breve! </h2>
      </Container>
    );
}

const Container = styled.div`
    height: 300px;
    width: 100%;
    color: Black;
    background-color: #eaeaea;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`