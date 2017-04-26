import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
  <div>
    <Route exact={true} path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
  </div>
);
