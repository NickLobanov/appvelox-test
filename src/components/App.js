import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Aside from './Aside';
import Header from './Header';
import Appointments from './Appointments';
import ECard from './ECard';
import data from '../data/data.js';
import AllSign from './AllSign';
import NotFound from './NotFound';

function App() {
  return (
    <div className="page">
        <Aside />
        <div className="wrap">
            <Header />
            <Switch>
              <Route exact path='/'>
                <Appointments data={data}/>
                <ECard />
              </Route>
              <Route path="/all-sign">
                <AllSign data={data} />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>       
        </div>
    </div>
  );
}

export default App;
