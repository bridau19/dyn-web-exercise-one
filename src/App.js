import {
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";

import './App.css';
import Article from './containers/Article';
import ArticleListing from "./containers/ArticleListing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/article/:id">
          <Article/>
        </Route>
        <Route path="/">
          <ArticleListing/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
