import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Nyheder from "./pages/Nyheder"
import Nyhed from "./pages/Nyhed"
import NyhedContextProvider from "./context/NyhedContext"
import OpretNyhed from "./pages/OpretNyhed"
import Produkter from "./pages/Produkter"
import Produkt from "./pages/Produkt"
import OpretProdukt from "./pages/OpretProdukt"
import ProduktContextProvider from "./context/ProduktContext"

function App() {
  return (
    <ProduktContextProvider>
    <NyhedContextProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/" component={Home} exact></Route>
          <Route path="/nyheder" component={Nyheder}></Route>
          <Route path="/nyhed/:nyhedsid" component={Nyhed}></Route>
          <Route path="/opretnyhed" component={OpretNyhed}></Route>
          <Route path="/produkter" component={Produkter}></Route>
          <Route path="/produkt/:produktid" component={Produkt}></Route>
          <Route path="/opretprodukter" component={OpretProdukt}></Route>
        </div>
      </BrowserRouter>
    </NyhedContextProvider>
    </ProduktContextProvider>
  );
}

export default App;
