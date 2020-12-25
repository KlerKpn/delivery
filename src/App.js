import React, { Component } from 'react'
import NavBar from './components/NavBar/NavBar'
import ListItems from './components/ListItems/ListItems'
import classes from './App.module.scss'

class App extends Component {
  render() {
    return (
      <div>
        <div className={classes.Head}>
            Првыиет
        </div>
        <div className='container'>
          <div>
            <NavBar />
            <ListItems />
          </div>
        </div>
      </div>
    )
  }
}

export default App