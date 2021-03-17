import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import CountryDetail from './views/CountryDetail';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={HomeView} exact />

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
