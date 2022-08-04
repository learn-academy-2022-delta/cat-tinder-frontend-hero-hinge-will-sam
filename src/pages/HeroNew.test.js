import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HeroNew from './HeroNew'
Enzyme.configure({adapter: new Adapter()}) 


describe("When NewHero renders", () => {
    it("displays a form", () => {
        const heroNew = shallow(< HeroNew />)
        const formGroup = heroNew.find("FormGroup")
        expect(formGroup.length).toEqual(4)

        const formLabel = heroNew.find("Label")
        expect(formLabel.length).toEqual(4)

        const formInput = heroNew.find("Input")
        expect(formInput.length).toEqual(4)

    })
})