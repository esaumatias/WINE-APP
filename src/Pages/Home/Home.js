import React from 'react';
import Header from '../../Components/Header/Header';
import CardsWines from '../../Components/CardsWines/CardsWines';
import { Container } from 'react-bootstrap';


function Home() {
  return (
    <Container>
      <Header />
      <CardsWines />
    </Container>
  );
}

export default Home;