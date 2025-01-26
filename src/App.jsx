import AddMenu from './AddMenu';
import './App.css';
import Footer from './Footer';
import Hero from './Hero';
import Menu from './Menu';
import MenuDisplay from './MenuDisplay';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Wrap main content in a default layout */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Menu />
                <Footer />
              </>
            }
          />
          {/* Route for AddMenu */}
          <Route path="/add-menu" element={<AddMenu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
