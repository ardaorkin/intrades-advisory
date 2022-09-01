import "./App.css";
import MainPage from "./pages/MainPage";
import NavBarContainer from "./containers/NavBarContainer";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <NavBarContainer />
      <MainPage />
      <AboutUs />
      <Products />
      <Pricing />
      <ContactUs />
    </div>
  );
}

export default App;
