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

  createNewHero = (theNewHeroObject) => {
    console.log(theNewHeroObject);
  }

  updateCat = (cat, id) => {
    console.log("cat:", cat)
    console.log("id", id)
  }

  deleteCat = (id) => {
    console.log("deleted", id)
  }


  render(){
    console.log('appjs state: ', this.state)
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route path="/heroindex" render={() => <HeroIndex cats={this.state.cats}/>} />
          <Route path="/heroshow/:id" render={(props) => {
            let id = +props.match.params.id
            let cat = this.state.cats.find(catObject => catObject.id === id)
            return(
              <HeroShow 
                cat={cat}
                deleteCat={this.deleteCat}
              />
            )
          }} />
          <Route path="/heronew"
                  render={() => {
                    return < HeroNew createNewHero={ this.createNewHero } />
                  }} />
          <Route path="/heroedit/:id" render={(props) =>{
            let id = +props.match.params.id
            let cat = this.state.cats.find(catObject => catObject.id === id)
            return(
            <HeroEdit 
            cat={cat}
            updatedCat={this.updatedCat}
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