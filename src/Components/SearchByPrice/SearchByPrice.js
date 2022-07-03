import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { getAllWines } from '../../Services/FetchApi';
import AppContext from '../../Context/AppContext';

function SearchByPrice() {
  const prices = ['Até R$40', `R$40 a R$60`, `R$100 a R$200`, `R$200 a R$500`, 'Acima de R$500'];
  const { setAllWines } = useContext(AppContext);

  function searchByPrices(price) {
    getAllWines().then((data) => {
      if (price === 'Até R$40') {
        const itensPrice = data.filter((price) => Number(price.priceNonMember) < 40);
        setAllWines(itensPrice);
      } else if (price === `R$40 a R$60`) {
        const itensPrice = data.filter((price) => Number(price.priceNonMember) < 60 &&  Number(price.priceNonMember) > 39);
        setAllWines(itensPrice);
      } else if (price === `R$100 a R$200`) {
        const itensPrice = data.filter((price) => Number(price.priceNonMember) < 200 &&  Number(price.priceNonMember) > 99);
        setAllWines(itensPrice);
      } else if (price === `R$200 a R$500`) {
        const itensPrice = data.filter((price) => Number(price.priceNonMember) < 500 &&  Number(price.priceNonMember) > 199);
        setAllWines(itensPrice);
      } else if (price === 'Acima de R$500') {
        const itensPrice = data.filter((price) => Number(price.priceNonMember) > 500);
        setAllWines(itensPrice);
      }
    })
  }

    return (
        <div>
          <b>Redefine sua busca</b>
          <p>por preço</p>
          <Form>
          {prices.map((type, index) => (
            <div key={index} className="mb-3">
              <Form.Check 
                type="radio"
                id={`${type}`}
                label={`${type}`}
                name="group1"
                onClick={() => searchByPrices(type)}
              />
            </div>
          ))}
          </Form>
        </div>
    );
}

export default SearchByPrice;
