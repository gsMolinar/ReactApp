import React from 'react';
import Header from './components/header';
import Product from './components/product';
import CounterProducts from './components/counterProducts';
import Footer from './components/footer.js'

function App() {
  return (
    <div>
      <Header />
      <Product />
      <CounterProducts />
      <Footer />
    </div>
  );
}

export default App;

