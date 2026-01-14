import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Toggle from "./components/Toggle";
import CharacterCounter from "./components/CharacterCounter";
import Users from "./components/Users";

function App() {
  return (
    <BrowserRouter>
      <nav className="header">
        <NavLink to="/counter">Counter </NavLink>
        <NavLink to="/form">Form </NavLink>
        <NavLink to="/toggle">Toggle </NavLink>
        <NavLink to="/textarea">Character Count </NavLink>
        <NavLink to="/users">Users </NavLink>
      </nav>

      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<Form />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/textarea" element={<CharacterCounter />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
