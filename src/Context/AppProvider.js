import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [allCards, setAllCards] = useState({});

  return (
    <AppContext.Provider
      value={{
        allCards,
        setAllCards
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;