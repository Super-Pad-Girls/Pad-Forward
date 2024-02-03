import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/nav/Header";
import Home from "./pages/Home";
import GetDonation from "./pages/GetDonation";
import BecomeADonor from "./pages/BecomeADonor";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/get-donation" element={<GetDonation />} />
                <Route path="/become-a-donor" element={<BecomeADonor />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    );
}

export default App;
