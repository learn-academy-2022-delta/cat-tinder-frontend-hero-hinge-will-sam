import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HeroShow from './HeroShow'
Enzyme.configure({adapter: new Adapter()})


describe("When the HeroShow renders", () => {
    const cat = {
            id: 1,
            name: "Mittens",
            age: 5,
            enjoys: "sunshine and warm spots",
            image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    
    }

    let renderedHeroShow;

    beforeEach(() => {
        renderedHeroShow = shallow(<HeroShow cat={cat}/>);
    });
    it("displays a profile for the hero", () => {
        const heroShowCard = renderedHeroShow.find("Card")
        expect(heroShowCard.length).toEqual(1)
    })

})