import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap'


class HeroShow extends Component {
    
    render(){
        let { cat } = this.props
        return (
            <>
                <Card key={cat.id}>
                    <CardImg top width="100%" src={cat.image} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Hi, my name is {cat.name}</CardTitle>
                            <CardSubtitle>{cat.age}</CardSubtitle>
                            <Button>{cat.enjoys}</Button>
                    </CardBody>
                </Card>
            </>
        )
    }
}

export default HeroShow