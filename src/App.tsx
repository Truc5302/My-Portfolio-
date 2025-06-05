import Home from "./page/Home";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/common/header/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
