import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Map from './pages/Map';
import NewCourse from './pages/NewCourse';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Map} />
        <Route path="/new-course" component={NewCourse} />
      </Switch>
    </BrowserRouter>
  );
}