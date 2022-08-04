import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap'

    
class HeroIndex extends Component {
    
    render(){
        return (
            <>
                <h2>Find a Love as powerful as you!</h2>
                <div>
                    {this.props.cats && this.props.cats.map(cat => {
                        return(
                            <Card style={{ width: '47rem' }}
                                key={cat.id} className="card">
                                <CardImg top width="100%" src={cat.image} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>{cat.name}</CardTitle>
                                    <CardSubtitle>{cat.age}</CardSubtitle>
                                    <Button>More info here</Button>
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