import { Routes as WrapperRouter, Route, BrowserRouter} from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";


function Routes() {
  return (
    <>
      <BrowserRouter>
        <WrapperRouter>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/nav" element={<Navbar />} />
        </WrapperRouter>
      </BrowserRouter>
    </>
  );
}

export default Routes;
