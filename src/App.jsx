import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import Reservation from "./pages/Reservation/Reservation";
import Ticket from "./pages/Ticket/Ticket";
import Account from "./pages/Account/Account";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import NotFound from "./pages/NotFound/NotFound";
import Favorites from "./pages/Favorites/Favorites";

import "./App.css";

/* APP */

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Header />

      <main>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/tienda"
            element={<Shop />}
          />

          <Route
            path="/producto/:id"
            element={<Product />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/registro"
            element={<Register />}
          />

          <Route
            path="/carrito"
            element={<Cart />}
          />

          <Route
            path="/reserva"
            element={<Reservation />}
          />

          <Route
            path="/ticket/:id"
            element={<Ticket />}
          />

          <Route
            path="/mi-cuenta"
            element={<Account />}
          />

          <Route
            path="/favoritos"
            element={<Favorites />}
          />

          <Route
            path="/como-funciona"
            element={<HowItWorks />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;