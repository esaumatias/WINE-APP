import React, { useContext, useEffect } from 'react';
import { getWines } from '../../Services/FetchApi';
import AppContext from '../../Context/AppContext';
import { Card, Row, Col, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardsWines() {
  const { allWines, setAllWines, setItensCart, itensCart, setSumBag, sumBag } = useContext(AppContext);

  useEffect(() => {
    getWines(1).then((data) => {
        setAllWines(data);
    })
  }, [setAllWines])

  function addLocalStorage(values) {
    const { priceNonMember, name, image, id } = values;
    const verificarWine = Object.keys(itensCart).find((key) => Number(key) === Number(id));
    const listSave = ({ name, id, image, priceNonMember });

    if (verificarWine) {
      const newArray = [itensCart].slice(id, 1)
      console.log(newArray);
      setItensCart((prevState) => {
        return [ ...prevState, listSave ];
      });
    } else {
      setItensCart((prevState) => {
        return [ ...prevState, listSave ];
      });
    }

    if (localStorage.getItem('itensCart') === null) {
      return localStorage.setItem('itensCart', JSON.stringify([]));
    } else {
      localStorage.setItem('itensCart', JSON.stringify(itensCart));
    }
    setSumBag(sumBag + 1)
  }

  return (
    <>
    {allWines.length > 0 ? (
        <Row xs={1} md={3} className="g-2">
        {allWines.map((value, index) => (
          <Col key={index}>
            <Link to={`/productDetail/${ value.id }`}>
              <Card>
                <Card.Img variant="top" src={value.image} style={{ width: '150px'}}/>
                <Card.Body>
                  <Card.Title>{value.name}</Card.Title>
                  <div>
                    <Card.Text>{value.price}</Card.Text>
                    <div>{`${value.discount}%OFF`}</div>
                  </div>
                  <strong>{`SÓCIO WINE: R$ ${value.priceMember}`}</strong>
                  <Card.Text>{`NÃO SÓCIO: R$ ${value.priceNonMember}`}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
            <div className="d-grid gap-2" style={{ marginTop: '12px'}}>
              <Button variant="primary" onClick={() => addLocalStorage(value)}>
                Adicionar
              </Button>
            </div>
          </Col>
        ))}
        </Row>
    ) : <Spinner animation="border" style={{margin: 'auto'}} />}
  </>
  );
}

export default CardsWines;
