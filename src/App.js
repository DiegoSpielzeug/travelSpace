
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Destination from "./pages/Destination";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar/>

        <Switch>
          
          <Route exact path="/destination" component={Destination}/>
          <Route exact path="/crew" />
          <Route exact path="/technology" />
          <Route path="/" component={Home} />
        </Switch>

      </Router>

     
    </>
  );
}

export default App;
