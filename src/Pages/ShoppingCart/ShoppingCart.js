import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';

function ShoppingCart() {
    const [wines, setWines] = useState({});

    useEffect(() => {
      if (localStorage.getItem('itensCart') === null) {
          return localStorage.setItem('itensCart', JSON.stringify([]));
      } else {
        const itemsList = JSON.parse(localStorage.getItem('itensCart'));
        setWines(itemsList)
        console.log(itemsList);
      }
    },[setWines])
    console.log(wines);
    return (
        <>
        <Header />
        {wines.lenght > 0 ? (
          wines.map((values, index) => (
            <h1 key={index}>{values.name}</h1>
          ))
        ) : null}
        </>
    );
}

export default ShoppingCart;