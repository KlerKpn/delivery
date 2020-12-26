import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout';
import ListItems from './components/ListItems/ListItems'
import { Route, Switch, Redirect } from 'react-router-dom'
import classes from './App.module.scss'
import logo from './assets/image/logo512.png'



class App extends Component {
  render() {
    return (
      <div>
        <div className={classes.Head}>
          <img height='100%' src={logo} alt='logo' />
          <h3>Доставка еды</h3>
          <div />
        </div>

        <Layout>
          <Switch>
            <Route path='/' exact component={ListItems} />
            <Redirect to='/' component={ListItems} />
          </Switch>
        </Layout>

      </div>
    )
  }
}

export default App