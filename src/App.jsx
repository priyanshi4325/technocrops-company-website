import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />

    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
