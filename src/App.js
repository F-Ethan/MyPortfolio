import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/header/Header';
import HomePage from './Components/home/HomePage';
import GitHubRepos from './Components/blog/GitHubRepos';
import About from './Components/about/About';
import Footer from './Components/footer/Footer';
import BlogPage from './Components/blog/BlogPage';
import ContactForm from './Components/form/ContactForm';
import Resume from './Components/Resume'

import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/About' component={About} />
          <Route exact path='/BlogList/:index/:blogId' component={BlogPage} />
          <Route exact path='/GitHubRepos' component={GitHubRepos} />
          <Route exact path='/ContactForm' component={ContactForm} />
          <Route exact path='/Resume' component={Resume} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
