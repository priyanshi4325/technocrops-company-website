import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from './ThemeContext';
import WebAppPage from "./pages/WebAppPage";
import BlockchainPage from "./pages/BlockchainPage";


function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/web-app-development" element={<WebAppPage />} />
        <Route path="/services/blockchain-solutions" element={<BlockchainPage />} />
      </Routes>

      <Footer />

    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
