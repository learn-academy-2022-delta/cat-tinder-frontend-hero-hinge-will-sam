import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class HeroShow extends Component {
    
    render(){
        let { hero } = this.props
        return (
            <>
                <Card>
                    <CardImg top width="100%" src={hero.image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Hi, my name is {hero.name}</CardTitle>
                        <CardSubtitle>{hero.age}</CardSubtitle>
                        <CardText>{hero.enjoys}</CardText>
                        <NavLink to={`/heroedit/${this.props.hero.id}`}>
                        <Button>Update Hero</Button>
                        </NavLink>
                        <Button onClick={()=> this.props.deleteHero(hero.id)}>Delete Hero</Button>
                    </CardBody>
                </Card>
            </>
        )
    }
}

export default HeroShow