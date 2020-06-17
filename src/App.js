import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header } from './screens/Header/Header';
import { Navigation } from './screens/Navigation/Navigation';

import { Login } from './screens/Login/Login';
import { Products } from './screens/Products/Products';
import { List } from './screens/List/List';
import { Account } from './screens/Account/Account';
import { Manage } from './screens/Manage/Manage';
import { ErrorPage } from './screens/ErrorPage/ErrorPage';

import './app.scss';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/products" component={Products} exact />
          <Route path="/list" component={List} exact />
          <Route path="/account" component={Account} exact />
          <Route path="/manage" component={Manage} exact />
          <Route path="" component={Login} exact/>
          <Route component={ErrorPage} />
        </Switch>

        <Navigation />
      </BrowserRouter>
    </div>
  )
}

export default App;
