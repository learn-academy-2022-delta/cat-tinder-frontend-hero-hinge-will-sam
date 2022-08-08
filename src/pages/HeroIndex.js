import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'

    
class HeroIndex extends Component {
    
    render(){
        return (
            <>
            <div className="indexPage">
                <h2>Find a Love as powerful as you!</h2>
                <div >
                    <Row>
                    {this.props.heros && this.props.heros.map(hero => {
                        return(
                            <Col sm="4">
                                <Card style={{ width: '15rem' }}
                                key={hero.id} >
                                    <CardImg top width="100%" src={hero.image} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>{hero.name}</CardTitle>
                                    <CardSubtitle>{hero.age}</CardSubtitle>
                                    <NavLink to={`/heroshow/${hero.id}`}>
                                        <Button>More info here</Button>
                                    </NavLink>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })}
                    </Row>
                </div>
            </div>    
            </>
        )
    }
}

export default HeroIndex