
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar/>

        <Switch>
          
          <Route exact path="/destination"/>
          <Route exact path="/crew" />
          <Route exact path="/technology" />
          <Route component={Home} path="/" />
        </Switch>

      </Router>

     
    </>
  );
}

export default App;
