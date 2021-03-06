import React, { useContext, useState } from 'react';
import Header from '../../Components/Header/Header';
import { getWines } from '../../Services/FetchApi';
import AppContext from '../../Context/AppContext';
import CardsWines from '../../Components/CardsWines/CardsWines';
import SearchByPrice from '../../Components/SearchByPrice/SearchByPrice';
import { Container, Pagination } from 'react-bootstrap';
import './Home.css';

function Home() {
  const { setAllWines, allWines } = useContext(AppContext);
  const [active, setActive] = useState(1);
  let items = [];

  for (let number = 1; number <= 7; number += 1) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => getWineNewPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  function getWineNewPage(value) {
    setActive(value);
    getWines(value).then((data) => {
      setAllWines(data);
    })
  }

  return (
    <Container>
      <Header />
      <section className="containerHome">
        <div className='containerLeft'>
          <SearchByPrice />
        </div>

        <div className='containerRigth'>
          <p>{`${allWines.length} produtos encontrados`}</p>
          <CardsWines />
        </div>
      </section>
      <Pagination>{items}</Pagination>
    </Container>
  );
}

export default Home;