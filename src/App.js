import React, { Component } from 'react'
import './App.css'
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
      heros: []
    }
  }
  
  componentDidMount() {
    this.readHero()
  }

  readHero = () => {
    fetch("http://localhost:3000/heros")
    .then(response => response.json())
    .then(payload => this.setState({heros: payload}))
    .catch(errors => console.log("Hero read errors: ", errors))
  }

  createNewHero = (theNewHeroObject) => {
    fetch("http://localhost:3000/heros", {
      body: JSON.stringify(theNewHeroObject),
      headers: {
       "Content-Type": "application/json"
      },
      method:"POST"
    })
    .then(response => response.json())
    .then(() => this.readHero())
    .catch(errors => console.log("Hero read errors: ", errors))
  }

  updateHero = (hero, id) => {
    fetch(`http://localhost:3000/heros/${id}`, {
      body: JSON.stringify(hero),
      headers: {
        "Content-Type": "application/json"
      },
      method:"PATCH"
    })
  .then(response => response.json())
  .then(() => this.readHero())
  .catch(errors => console.log("Hero update errors: ", errors))
  }

  deleteHero = (id) => {
    fetch(`http://localhost:3000/heros/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method:"DELETE"
    })
  .then(response => response.json())
  .then(() => this.readHero())
  .catch(errors => console.log("Hero delete errors: ", errors))
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
              updateHero={this.updateHero}
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