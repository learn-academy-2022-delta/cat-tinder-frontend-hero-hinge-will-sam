import React from 'react'
import Enzyme, { shallow } from  'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
    it("displays an h3 with text", () => {
        const renderedHome = shallow(<Home/>)

        const homeWelcomeTag = renderedHome.find("div")
        const homeWelcomeTagText = homeWelcomeTag.text()

        expect(homeWelcomeTagText).toEqual("Home")
    })

    // it("displays an img with function", () => {
    //     const renderedHome = shallow(<Home/>)

    //     const homeImageTag = renderedHome.find("img")
    //     const homeImageTagData = homeImageTag.function() 

    //     expect(homeImageTagData).toEqual("")
    // })
})