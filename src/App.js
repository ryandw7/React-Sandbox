import React from 'react';
import List from './List'
function App() {
  const items = [
    {name: 'phone'}, {name: 'keys'}, {name: 'wallet'}
  ];
  
  return (
   <List items={items} />
  );
}

export default App;
