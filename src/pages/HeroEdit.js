import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class HeroEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            updatedHero: {
                name: this.props.hero.name,
                age: this.props.hero.age,
                enjoys: this.props.hero.enjoys,
                image: this.props.hero.image
            },
            submitted: false
        }
    }
    
    handleChange = (e) => {
        let { updatedHero } = this.state
        updatedHero[e.target.name] = e.target.value
        this.setState({ updatedHero: updatedHero })
    }

    handleSubmit = () => {
        this.props.updateHero(this.state.updatedHero, this.props.hero.id)
        this.setState({ submitted: true })
    }

    render(){
        console.log(this.state.updatedHero)
        return (
            <>
                <Form>
                <FormGroup>
                    <Label for='name'> Name </Label>
                    <Input 
                        type='text' 
                        name='name' 
                        onChange={ this.handleChange }
                        value={ this.state.updatedHero.name }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='age'> Age </Label>
                    <Input 
                        type='text' 
                        name='age' 
                        onChange={ this.handleChange }
                        value={ this.state.updatedHero.age }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='enjoys'> Enjoys </Label>
                    <Input 
                        type='text' 
                        name='enjoys' 
                        onChange={ this.handleChange }
                        value={ this.state.updatedHero.enjoys }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='image'> Image </Label>
                    <Input 
                        type='text' 
                        name='image'
                        onChange={ this.handleChange } 
                        value={ this.state.updatedHero.image }
                    />
                </FormGroup>
                <Button
                    name='submit'
                    onClick={ this.handleSubmit }
                    >Submit Hero 
                </Button>
                { this.state.submitted && <Redirect to={`/heroshow/${this.props.hero.id}`}/> }
            </Form>
            </>
        )
    }
}

export default HeroEdit