import "./styles/index.css";
import { Router } from "./navigations/Router";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <div className="app-content">
        <Router />
      </div>

      <Footer />
    </div>
  );
};

export default App;
