import "./App.css";
import MainPage from "./pages/MainPage";
import NavBarContainer from "./containers/NavBarContainer";
import AboutUs from "./pages/AboutUs";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <NavBarContainer />
      <MainPage />
      <AboutUs />
      <Industries />
      <Pricing />
      <ContactUs />
    </div>
  );
}

export default App;
