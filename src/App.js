import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import ClassList from './components/classList';
import ClassDetail from './components/classDetail';

import './styles/app.scss';

function App() {
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    function getClasses() {
      let response = axios.get('https://www.dnd5eapi.co/api/classes');
      setClassList(response.data.results);
    }
    getClasses();
  }, []);

  return (
    <HashRouter basename='/'>
      <div className="App">
        <Header />
        
        <Switch>
          <Route 
            exact 
            path='/' 
            render={(props) => {
              return <ClassList classList={classList} {...props} />
            }}
          />

          <Route 
            exact 
            path='/view/:classname'
            render={() => {
              return <ClassDetail />
            }}
          />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
