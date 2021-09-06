import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import TodosPage from './pages/TodosPage';
import AboutUsPage from './pages/AboutUsPage';

const App: React.FC = () => {
  return (
    <>
      <HashRouter basename="/">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={TodosPage} />
            <Route path="/todos" component={TodosPage} />
            <Route path="/about" component={AboutUsPage} />
          </Switch>
        </div>
      </HashRouter>
    </>
  );
};

export default App;
