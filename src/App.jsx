import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from './ThemeContext';
import WebAppPage from "./pages/WebAppPage";
import BlockchainPage from "./pages/BlockchainPage";
import TestingPage from "./pages/TestingPage";
import StaffAugPage from "./pages/StaffAugPage";
import AIPage from "./pages/AIPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";


function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/web-app-development" element={<WebAppPage />} />
        <Route path="/services/blockchain-solutions" element={<BlockchainPage />} />
        <Route path="/services/software-testing" element={<TestingPage />} />
        <Route path="/services/staff-augmentation" element={<StaffAugPage />} />
        <Route path="/services/ai-integrations" element={<AIPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>

      <Footer />

    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
