import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout';
import ListItems from './components/ListItems/ListItems'
import { Route, Switch, Redirect } from 'react-router-dom'
import classes from './App.module.scss'
import logo from './assets/image/logo512.png'
import Auth from './components/Auth/Auth';
import RestaurantsList from './components/Restaurants/RestaurantsList/RestaurantsList';
import BrandPage from './components/Restaurants/BrandPage/BrandPage';
import StashPage from './components/Stash/StashPage/StashPage';


function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact component={ListItems} />
          <Route path='/restaurants' exact component={RestaurantsList} />
          <Route path='/restaurants/:id' exact component={BrandPage} />
          <Route path='/auth' exact component={Auth} />
          <Route path='/stash' exact component={StashPage} />
          <Redirect to='/' component={ListItems} />
        </Switch>
      </Layout>
    </div>
  )
}

export default App