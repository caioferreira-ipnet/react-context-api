//Style
import "./App.css";
//React-Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import NavBar from "./components/NavBar.jsx";
//Pages
import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details" element={<Details />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
