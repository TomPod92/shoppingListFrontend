import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer} from 'react-toastify';

import { store } from './redux/store';
import { autoLogin } from './redux/actions/user.actions';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Header } from './screens/Header/Header';
import { Navigation } from './screens/Navigation/Navigation';
import { Login } from './screens/Auth/Login';
import { Register } from './screens/Auth/Register';
import { Products } from './screens/Products/Products';
import { List } from './screens/List/List';
import { Account } from './screens/Account/Account';
import { Manage } from './screens/Manage/Manage';
import { ErrorPage } from './screens/ErrorPage/ErrorPage';

import './app.scss';
import { setAuthToken } from './helpers/setAuthToken';

// Jeżeli w localStorage znajduje sie już token dodaj go do header'a wszystkich zapytań
if(localStorage.getItem('shoppingListToken')) {
  setAuthToken(localStorage.getItem('shoppingListToken'));
}

const App = () => {

  useEffect(() => {
    // if(localStorage.shoppingListToken) {
      // setAuthToken(localStorage.shoppingListToken);
      store.dispatch(autoLogin())
      console.log('----------------------------')
      console.log(localStorage.shoppingListToken)
    // }
  }, []);
  
  return (
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>
          <Header />

          <Switch>
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <PrivateRoute path="/products" component={Products} exact />
            <PrivateRoute path="/list" component={List} exact />
            <PrivateRoute path="/account" component={Account} exact />
            <PrivateRoute path="/manage" component={Manage} exact />
            <Route path="" component={Login} exact/>
            <Route component={ErrorPage} />
          </Switch>

          <Navigation />
        </BrowserRouter>

        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
      ></ToastContainer>
      </div>
    </Provider>
  )
}

export default App;
