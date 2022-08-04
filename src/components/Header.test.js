import React from 'react'
import Enzyme, { shallow } from  'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({adapter: new Adapter()})


describe("When Header renders", () => {
    it("shows 3 NavItems", () => {
        const renderedHeader = shallow(<Header/>)

        const headerNavItems = renderedHeader.find("NavItem")

        expect(headerNavItems.length).toEqual(3)
    })
})