import Home from "./page/Home";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/common/layouts/header/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/common/layouts/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
