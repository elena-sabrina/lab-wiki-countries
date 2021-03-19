import './App.css';
import { BrowserRouter, Route, Switch, Render } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import CountryDetail from './views/CountryDetail';
import countries from './countries.json';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HomeView countries={countries} exact />
      <Switch>
        <Route
          path="/:id"
          render={(props) => <CountryDetail {...props} />}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
