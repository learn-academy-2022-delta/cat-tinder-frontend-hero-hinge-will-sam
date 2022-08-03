import React from 'react'
import Enzyme, { shallow } from  'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({adapter: new Adapter()})


describe("When Header renders", () => {
    it("displays an h1 with text", () => {
        const renderedHeader = shallow(<Header/>)

        const headerTag = renderedHeader.find("h1")
        const headerTagText = headerTag.text()

        expect(headerTagText).toEqual("HeroHinge")
    })
})