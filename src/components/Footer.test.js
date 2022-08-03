import React from 'react'
import Enzyme, { shallow } from  'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'

Enzyme.configure({adapter: new Adapter()})


describe("When Footer renders", () => {
    it("displays an h5 with text", () => {
        const renderedFooter = shallow(<Footer/>)

        const footerTag = renderedFooter.find("h5")
        const footerTagText = footerTag.text()

        expect(footerTagText).toEqual("created by Samuel & Will")
    })
})