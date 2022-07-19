import { Routes as WrapperRoute, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Footer } from "./components/Footer"

export function Routes() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <WrapperRoute>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
                  </WrapperRoute>
      </Container>
      <Footer />
    </ShoppingCartProvider>
  )
}

