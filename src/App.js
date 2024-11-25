import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
