import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./page/main";
// import BodyImg from "./components/body";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Main} />
  </Router>
  );
}

export default App;
