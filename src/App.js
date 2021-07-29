import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import Services from "./services/Services";
import Product from "./products/Product";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Product} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
