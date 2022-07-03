import React, { useEffect, useState, useContext } from 'react';
import Header from '../../Components/Header/Header';
import AppContext from '../../Context/AppContext';
import { Card, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ShoppingCart() {
    const [wines, setWines] = useState({});
    const [allWines, setAllWines] = useState({});
    const { itensCart, setItensCart, setSumBag, sumBag } = useContext(AppContext); 

    useEffect( () => {
      if (localStorage.getItem('itensCart') === null) {
          return localStorage.setItem('itensCart', JSON.stringify([]));
      } else {
        const itemsList = JSON.parse(localStorage.getItem('itensCart'));

        const removeRepeated = itemsList.filter(function (a) {
          return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
        }, Object.create(null))

        setWines(removeRepeated);
        setAllWines(itemsList);
      }
    },[setWines])

    function addWine(values) {
      setItensCart((prevState) => {
        return [ ...prevState, values ];
      });
      if (localStorage.getItem('itensCart') === null) {
        return localStorage.setItem('itensCart', JSON.stringify([]));
      } else {
        localStorage.setItem('itensCart', JSON.stringify(itensCart));
        setAllWines(itensCart);
        setSumBag(sumBag + 1)
      }
    }

    function removeWine(name) {
      const itenCart = allWines.slice();
      const index = allWines.findIndex((item) => item.name === name);
      setSumBag(sumBag - 1)
      if (localStorage.getItem('itensCart') === null) {
        return localStorage.setItem('itensCart', JSON.stringify([]));
      } else {
        itenCart.splice(index, 1);
        localStorage.removeItem('itensCart');
        localStorage.setItem('itensCart', JSON.stringify(itenCart));
        setAllWines(itenCart)
      }
    }

    return (
        <Container>
          <Header />
          <Link to="/">Voltar</Link>
          <h1 style={{ textAlign: 'center' }}>Carrinho de compras</h1>
          {wines.length > 0 ? (
            wines.map((values, index) => (
              <Card key={index}> 
                <Card.Body>
                  <Card.Title>{values.name}</Card.Title>
                  <Card.Text>{`R$ ${values.priceNonMember * allWines.filter((value) => value.name === values.name).length}`}</Card.Text>
                  <Button variant="primary" onClick={() => removeWine(values.name)}>-</Button>
                  {allWines.filter((value) => value.name === values.name).length}
                  <Button variant="primary" onClick={() => addWine(values)}>+</Button>
                </Card.Body>
              </Card>
            ))
          ) : null}
        </Container>
    );
}

export default ShoppingCart;