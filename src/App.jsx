import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomeView from './views/HomeView';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Navbar />
        <HomeView />
        <Route path="/" component={HomeView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
