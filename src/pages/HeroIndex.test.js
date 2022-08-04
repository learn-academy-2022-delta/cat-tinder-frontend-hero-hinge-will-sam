import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HeroIndex from './HeroIndex'
Enzyme.configure({adapter: new Adapter()})


describe("When the HeroIndex renders", () => {
    const props = {
        cats:  [
            {
                id: 1,
                name: "Mittens",
                age: 5,
                enjoys: "sunshine and warm spots",
                image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
        ]
    }

    let renderedHeroIndex;

    beforeEach(() => {
        renderedHeroIndex = shallow(<HeroIndex {...props}/>);
    });
    it("displays a heading", () => {
        const indexHeader = renderedHeroIndex.find("h2")
        expect(indexHeader.length).toEqual(1)
        expect(indexHeader.text()).toEqual("Find a Love as powerful as you!")
    })
    it("displays a hero", () => {
        const heroIndexCard = renderedHeroIndex.find("Card")
        expect(heroIndexCard.length).toEqual(1)
    })
})