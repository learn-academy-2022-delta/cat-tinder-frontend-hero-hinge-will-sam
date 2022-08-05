import React, { Component } from 'react'
import './App.css'
import heros from './mockHeros'
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
      heros: heros
    }
  }

  createNewHero = (theNewHeroObject) => {
    console.log(theNewHeroObject);
  }

  updateHero = (hero, id) => {
    console.log("hero:", hero)
    console.log("id", id)
  }

  deleteHero = (id) => {
    console.log("deleted", id)
  }


  render(){
    console.log('appjs state: ', this.state)
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route path="/heroindex" render={() => <HeroIndex heros={this.state.heros}/>} />
          <Route path="/heroshow/:id" render={(props) => {
            let id = +props.match.params.id
            let hero = this.state.heros.find(heroObject => heroObject.id === id)
            return(
              <HeroShow 
                hero={hero}
                deleteHero={this.deleteHero}
              />
            )
          }} />
          <Route path="/heronew"
                  render={() => {
                    return < HeroNew createNewHero={ this.createNewHero } />
                  }} />
          <Route path="/heroedit/:id" render={(props) =>{
            let id = +props.match.params.id
            let hero = this.state.heros.find(heroObject => heroObject.id === id)
            return(
            <HeroEdit 
            hero={hero}
            updatedHero={this.updatedHero}
            />
            )
          }} />
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