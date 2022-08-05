import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

    
class HeroIndex extends Component {
    
    render(){
        return (
            <>
                <h2>Find a Love as powerful as you!</h2>
                <div>
                    {this.props.heros && this.props.heros.map(hero => {
                        return(
                            <Card style={{ width: '25rem' }}
                                key={hero.id} className="card">
                                <CardImg top width="100%" src={hero.image} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>{hero.name}</CardTitle>
                                    <CardSubtitle>{hero.age}</CardSubtitle>
                                    <NavLink to={`/heroshow/${hero.id}`}>
                                        <Button>More info here</Button>
                                    </NavLink>
                                </CardBody>
                            </Card>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default HeroIndex