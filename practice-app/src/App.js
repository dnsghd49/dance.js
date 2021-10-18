import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./page/main";
import Footer from './components/footer';
import FooterTwo from './components/footerTwo';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Main} />
      <Footer />
      <FooterTwo />
  </Router>
  );
}

export default App;
