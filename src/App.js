import React, { Component } from 'react'
import './App.css'
import cats from './mockCats'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import HeroIndex from './pages/HeroIndex'
import HeroShow from './pages/HeroShow'
import HeroNew from './pages/HeroNew'
import HeroEdit from './pages/HeroEdit'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router, Route, Switch} from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: cats
    }
  }





  render(){

    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route path="/heroindex" component={HeroIndex}  />
          <Route path="/heroshow" component={HeroShow}  />
          <Route path="/heronew" component={HeroNew}  />
          <Route path="/heroedit" component={HeroEdit}  />
          <Route component={NotFound}/>
        </Switch>  
        <div style ={{
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
        }}>
        <Footer />
        </div>
      </Router>
    )
  }
}

export default App