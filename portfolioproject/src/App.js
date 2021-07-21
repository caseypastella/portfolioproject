import logo from './logo.svg';
import './App.css';
import {Link, Route, Switch, Redirect} from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
function App() {
  return (
    <Router history={history}>
          <Routes />
        </Router>
  );
}

export default App;
