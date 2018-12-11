import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';
import Profile from './components/user/Profile';
import ProjectIndex from './components/projects/Index';
import ProjectShow from './components/projects/Show';
import ProjectNew from './components/projects/New';
import ProjectEdit from './components/projects/Edit';


import 'bulma';
import './scss/style.scss';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <main className="container">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/projects' component={ProjectIndex}/>
              <Route exact path='/projects/new' component={ProjectNew}/>
              <Route exact path='/projects/:id' component={ProjectShow}/>
              <Route exact path='/projects/:id/edit' component={ProjectEdit}/>
              <Route path="/login" component={AuthLogin} />
              <Route path="/register" component={AuthRegister} />
              <Route path="/users/:id" component={Profile} />
            </Switch>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
