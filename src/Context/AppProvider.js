import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [allWines, setAllWines] = useState({});
  const [itensCart, setItensCart] = useState({});

  return (
    <AppContext.Provider
      value={{
        allWines,
        setAllWines,
        itensCart,
        setItensCart
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;