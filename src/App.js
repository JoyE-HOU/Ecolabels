import React, {useState, useEffect} from 'react'
import { 
  BrowserRouter, 
  Route, 
  Redirect,
  Switch 
} from 'react-router-dom';

import axios from 'axios';

import './App.css';
import './component/Landing'
import Landing from './component/Landing';
import Nav from './component/Nav';
import User from './component/User';

function App() {

  // const [allData, setAllData] = useState([]);
  // const [filteredData, setFilteredData] = useState(allData);

  // useEffect(() => {
  //   axios('http://localhost:3000/api/v1/ecolabel_categories')
  //   .then(response => {
  //     console.log(response.data)
  //     setAllData(response.data);
  //     setFilteredData(response.data);
  //   })
  //   .catch(error => {
  //     console.log('Error getting fake data: ' + error);
  //   })
  // }, []);
  
  // const handleSearch = (event) =>{

  // }

  return (
    <div className="App">

      <BrowserRouter>
        <Switch>


          <Route exact path='/'>
            <Landing />
          {/* </Route> */}

          {/* <Route path='/user'> */}
            <Nav />
            <User />
          </Route>

          <Route>
            <Redirect to='/' />
          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
