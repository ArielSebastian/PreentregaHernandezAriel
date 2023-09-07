import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget'; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <ItemListContainer />
        <CartWidget itemCount={3} />
      </main>
    </div>
  );
}

export default App;