import React, { useContext, useEffect } from 'react';
import { getWines } from '../../Services/FetchApi';
import AppContext from '../../Context/AppContext';
import { Card, Row, Col, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardsWines() {
  const { allWines, setAllWines, setItensCart, itensCart, setSumBag, sumBag, setDataWines } = useContext(AppContext);

  useEffect(() => {
    getWines(1).then((data) => {
        setAllWines(data);
        setDataWines(data);
    })
  }, [setAllWines, setDataWines])

  function addLocalStorage(values) {
    const { priceNonMember, name, image, id } = values;
    const listSave = ({ name, id, image, priceNonMember });

    setItensCart((prevState) => {
      return [ ...prevState, listSave ];
    })

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
        <Row xs={1} md={3} className="g-5">
        {allWines.map((value, index) => (
          <Col key={index}>
            <Link to={`/productDetail/${ value.id }`} style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}}>
              <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card.Img variant="top" src={value.image} style={{ width: '150px', margin: 'auto'}}/>
                <Card.Body>
                  <Card.Title>{value.name}</Card.Title>
                  <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <Card.Text>{`R$ ${value.price}`}</Card.Text>
                    <div style={{ backgroundColor: 'pink', height: '50%', marginLeft: '5px'}}>{`${value.discount}%OFF`}</div>
                  </div>
                  <strong>{`SÓCIO WINE: R$ ${value.priceMember}`}</strong>
                  <Card.Text>{`NÃO SÓCIO: R$ ${value.priceNonMember}`}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
            <div className="d-grid gap-2" style={{ marginTop: '12px'}}>
              <Button variant="success" onClick={() => addLocalStorage(value)}>
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
