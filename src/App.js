import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Goals from './components/Goals'
import ToDo from './components/ToDo'
import Home from './components/Home'
import Useful from './components/Useful'
import Events from './components/Events'
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route to="/home">
          <Home />
        </Route>
        <Route to="/todo">
          <ToDo />
        </Route>
        <Route to="/useful">
          <Useful />
        </Route>
        <Route to="/events">
          <Events />
        </Route>
        <Route to="/goals">
          <Goals />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
