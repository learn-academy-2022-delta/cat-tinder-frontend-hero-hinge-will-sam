import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
class Header extends Component {
    
    render(){
        return (
            <div className="banner-wrap">
                <div className= "banner-image"> 
                    <Nav className="header-nav">
                        <NavItem>
                            <NavLink to="/">
                                <h1 className="siteName" >HeroHinge</h1>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/heroindex" className= "nav-link">
                                <h6 className="navLink6">Meet the Heroes</h6>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/heronew" className= "nav-link">
                                <h6 className="navLink6">Add a Hero Profile</h6>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
        
        )
    }
}

export default Header