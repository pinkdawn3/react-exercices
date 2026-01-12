import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Toggle from "./components/Toggle";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/counter">Counter </NavLink>
        <NavLink to="/form">Form </NavLink>
        <NavLink to="/toggle">Toggle </NavLink>
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
