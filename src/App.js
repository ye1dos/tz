import logo from './logo.svg';
import './App.css';
import "./main.css"
import "./main.css.map"
import "./main.scss"
import Main from './components/Main';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Goals from './components/Goals'
import ToDo from './components/ToDo'
import Home from './components/Home'
import Useful from './components/Useful'
import Events from './components/Events'
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/todo">
          <ToDo />
        </Route>
        <Route path="/useful">
          <Useful />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/goals">
          <Goals />
        </Route>
      </Switch>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
