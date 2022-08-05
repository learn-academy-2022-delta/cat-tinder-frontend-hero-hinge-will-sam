import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'


class HeroNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newHero: {
                name: "",
                age: "",
                enjoys: "",
                image: ""
            },
            submitted: false
        }
    }

    handleChange = (e) => {
        const { newHero } = this.state

        newHero[e.target.name] = e.target.value
        this.setState({ newHero: newHero })
    }

    handleSubmit = () => {
        this.props.createNewHero(this.state.newHero)
        this.setState({ submitted: true})
    }
    
    render(){
        return (
            <div className="newPage">
            <div className="newPage-image">
            <Form>
                <FormGroup>
                    <Label for='name' className="label"> Name </Label>
                    <Input 
                        type='text' 
                        name='name' 
                        onChange={ this.handleChange }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='age' className="label"> Age </Label>
                    <Input 
                        type='text' 
                        name='age' 
                        onChange={ this.handleChange }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='enjoys' className="label"> Enjoys </Label>
                    <Input 
                        type='text' 
                        name='enjoys' 
                        onChange={ this.handleChange }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='image' className="label"> Image </Label>
                    <Input 
                        type='text' 
                        name='image'
                        onChange={ this.handleChange } 
                    />
                </FormGroup>
                <Button
                    name='submit'
                    onClick={ this.handleSubmit }> Submit Hero 
                </Button>
                { this.state.submitted && <Redirect to='/heroindex'/> }
            </Form>
            </div>
            </div>
        )
    }
}

export default HeroNew