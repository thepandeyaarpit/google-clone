import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <Router>
        <div className='App'>
            <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/search">
                  <SearchPage />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
