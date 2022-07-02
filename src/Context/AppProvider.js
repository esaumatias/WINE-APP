import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [allWines, setAllWines] = useState({});
  const [sumBag, setSumBag] = useState(0);

  return (
    <AppContext.Provider
      value={{
        allWines,
        setAllWines,
        sumBag,
        setSumBag
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;