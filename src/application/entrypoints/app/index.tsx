/* Dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

/* Styles */
import './styles/index.css';

/* Components */
import Header from './components/Header/Header'

/* Pages */
import Home from './pages/home/view';
import CreateActionItem from './pages/createActionItem/view';
import ActionItemDetail from './pages/actionItem/view/';

const App = () => {
  return (
    <Router>
      <main className="relative">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <CreateActionItem />
          </Route>
          <Route exact path="/:id">
            <ActionItemDetail />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));