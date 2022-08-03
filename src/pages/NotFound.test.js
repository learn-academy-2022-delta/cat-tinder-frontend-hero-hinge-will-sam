import React from 'react'
import Enzyme, { shallow } from  'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({adapter: new Adapter()})


describe("When NotFound renders", () => {
    it("displays an h3 with text", () => {
        const renderedNotFound = shallow(<NotFound/>)

        const notFoundTag = renderedNotFound.find("h3")
        const notFoundTagText = notFoundTag.text()

        expect(notFoundTagText).toEqual("404: You should have went for the head!")
    })
})