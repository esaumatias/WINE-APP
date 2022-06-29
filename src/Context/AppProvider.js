import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [allWines, setAllWines] = useState({});

  return (
    <AppContext.Provider
      value={{
        allWines,
        setAllWines
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;