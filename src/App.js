import React from 'react';
import Router from './Router/Router';
import AppProvider from './Context/AppProvider';


function App() {
  
  return (
    <AppProvider>
     <Router />
    </AppProvider>
  );
}

export default App;
