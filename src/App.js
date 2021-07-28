import { 
  BrowserRouter, 
  Route, 
  Redirect,
  Switch 
} from 'react-router-dom';

import './App.css';
import './component/Landing'
import Landing from './component/Landing';
import Nav from './component/Nav';
import User from './component/User';
import EcoForm from './component/EcoForm';

function App() {
  return (
    <div className="App">
      <Nav />

      <BrowserRouter>
        <Switch>


          <Route exact path='/'>
            <Landing />
          </Route>

          <Route path='/user'>
            <User />
          </Route>

          {/* <Route path='/ecoform'>
            <EcoForm />
          </Route> */}

          <Route>
            <Redirect to='/' />
          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
