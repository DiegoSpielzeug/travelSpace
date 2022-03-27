
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Crew from './pages/Crew';
import Technology from "./pages/Technology";

function App() {
  return (
    <>
      <Router>
        <Navbar/>

        <Switch>
          
          <Route exact path="/destination" component={Destination}/>
          <Route exact path="/crew" component={Crew}/>
          <Route exact path="/technology" component={Technology} />
          <Route exact path="/" component={Home} />
        </Switch>

      </Router>

     
    </>
  );
}

export default App;
