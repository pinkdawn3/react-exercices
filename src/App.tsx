import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Toggle from "./components/Toggle";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/counter">Counter </Link>
        <Link to="/form">Form </Link>
        <Link to="/toggle">Toggle </Link>
      </nav>

      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<Form />} />
        <Route path="/toggle" element={<Toggle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
