import "./App.css";
import "./animations.css";
import MainPage from "./pages/MainPage";
import NavBarContainer from "./containers/NavBarContainer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { useState } from "react";

function App() {
  const [componentWillAnimate, setComponentWillAnimate] = useState("#home");

  const startAnimation = (event) => {
    const url = new URL(event.target.href);
    const hash = url.hash;
    setComponentWillAnimate(hash);
  };
  return (
    <div className="App">
      <NavBarContainer startAnimation={startAnimation} />
      <MainPage
        componentWillAnimate={componentWillAnimate}
        startAnimation={startAnimation}
      />
      <AboutUs componentWillAnimate={componentWillAnimate} />
      <ContactUs componentWillAnimate={componentWillAnimate} />
    </div>
  );
}

export default App;
