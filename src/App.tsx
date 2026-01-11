import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/counter">Counter</Link>
      </nav>

      <Routes>
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
