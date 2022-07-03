import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [allWines, setAllWines] = useState({});
  const [itensCart, setItensCart] = useState([]);
  const [sumBag, setSumBag] = useState(0);

  useEffect( () => {
    if (localStorage.getItem('itensCart') === null) {
        return localStorage.setItem('itensCart', JSON.stringify([]));
    } else {
      const itemsList = JSON.parse(localStorage.getItem('itensCart'));
      setItensCart(itemsList)
      setSumBag(itemsList.length)
    }
  },[setItensCart])

  return (
    <AppContext.Provider
      value={{
        allWines,
        setAllWines,
        itensCart,
        setItensCart,
        sumBag,
        setSumBag
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;