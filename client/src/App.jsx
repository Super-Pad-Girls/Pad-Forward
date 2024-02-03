import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/nav/Header';
import Home from './pages/Home';
import GetDonation from './pages/GetDonation';
import BecomeADonator from './pages/BecomeADonator';
import Contact from './pages/Contact';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/get-donation' element={<GetDonation />} />
                <Route path='/become-a-donator' element={<BecomeADonator />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    );
}

export default App;
