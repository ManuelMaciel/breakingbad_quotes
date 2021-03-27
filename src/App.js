import React, {useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

//Styled Components
const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 3rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: rgb(0,125,53);
  background: linear-gradient(128deg, rgba(0,125,53,1) 0%, rgba(0,125,53,1) 40%, rgba(15,87,78,1) 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover{
    cursor: pointer;
    background-size: 400px;
  }

`;


function App() {

  //useStates
  const [ frase, guardarFrase ] = useState({});

  const consultarAPI = async () => {
    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]);
  }

  useEffect( () => {
    consultarAPI();
  }, [])

  return (
    
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton
        onClick={ () => consultarAPI() }
      >Get phrases</Boton>
    </Contenedor>

  );
}

export default App;
