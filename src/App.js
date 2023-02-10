import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

//Pages
import Homepage from "./Pages/Homepage/Homepage";
import Brandpage from "./Pages/Brandpage/Brandpage";
import TrackingYourVerification from "./Pages/TrackingYourVerification/TrackingYourVerification";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ajio" element={<Brandpage />} />
        <Route path="/tracking-your-verification" element={<TrackingYourVerification />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;