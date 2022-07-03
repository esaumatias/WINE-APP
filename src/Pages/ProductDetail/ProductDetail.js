import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../Context/AppContext';
import Header from '../../Components/Header/Header';
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

function ProductDetail() {
    const { id } = useParams();
    const { allWines } = useContext(AppContext);
    const [detailProduct, setDetailProduct] = useState([]);
    const { 
      classification, 
      country,
      region,
      flag,
      image,
      name,
      price,
      priceMember,
      priceNonMember,
      rating,
      size,
      type,
      sommelierComment,
      discount,
      avaliations
    } = detailProduct;

    useEffect(() => {
        const detail = allWines.find((value) => value.id === Number(id));
        setDetailProduct(detail)
    }, [allWines, id])
    
    return (
        <Container>
          <Header />

          <Link to="/">Voltar</Link>
          <Row xs={1} md={2} className="g-2">
            <Col>
                <Image src={image} fluid />
            </Col>

            <Col>
              <div>
                Vinhos  {country} {region} 
              </div>
              <Card>
                <Card.Title>{name}</Card.Title>
                <Card.Body>
                  <div>
                    <img src={flag} alt="flag" style={{ width: '20px' }}/>
                    <Card.Text>{`${country} ${type} ${classification} ${size}`}</Card.Text>
                    <StarRatings 
                        rating={rating}
                        starRatedColor="yellow"
                        numberOfStars={5}
                        name='rating'
                        starDimension='22px'
                      />
                    <Card.Text>{`(${avaliations})`}</Card.Text>
                  </div>

                  <div>
                  <div>
                    <Card.Text>{price}</Card.Text>
                    <div>{`${discount}%OFF`}</div>
                  </div>
                    <strong>{priceMember}</strong>
                    <Card.Text>{`NÃO SÓCIO: R$ ${priceNonMember}`}</Card.Text>
                    <b>Comentário do Sommelier</b>
                    <Card.Text>{sommelierComment}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    );
}

export default ProductDetail;
