/**
 * @jest-environment jsdom
 */

import React,{useRef,useEffect} from 'react';
import {shallow,mount} from 'enzyme';
import SlideNavigation from './SlideNavigation';
import SlideWrapper from './SlideWrapper';

Element.prototype.scrollTo = () => {}

// jest.mock('react', () => {
//   const originReact = jest.requireActual('react');
//   const mUseRef = jest.fn();
//   return {
//     ...originReact,
//     useRef: mUseRef,
//   };
// });
//
// const mRef = { current: { scrollTo: jest.fn() } };
//   useRef.mockReturnValue(mRef);

  it("SlideNavigation component state count increase on click of next Button",()=>{
    const component = shallow(<SlideNavigation slideShowArray={[{name:'name1',content:'content1'},{name:'name2',content:'content2'},{name:'name3',content:'content3'}]}/>);
    component.find('.buttonWrapper > .right').simulate('click',{target:{innerText:'Next'}});
    expect(component.find(SlideWrapper).prop('slideNumber')).toBe(1);
  })

  it("SlideNavigation component state count decrease on click of previous Button",()=>{
    const component = shallow(<SlideNavigation slideShowArray={[{name:'name1',content:'content1'},{name:'name2',content:'content2'},{name:'name3',content:'content3'}]} />);
    component.find('.buttonWrapper > .right').simulate('click',{target:{innerText:'Next'}});
    component.find('.buttonWrapper > .left').simulate('click',{target:{innerText:'Previous'}});
    expect(component.find(SlideWrapper).prop('slideNumber')).toBe(0);
  })

  it("SlideNavigation component state change on click of reset Button",()=>{
    const component = shallow(<SlideNavigation slideShowArray={[{name:'name1',content:'content1'},{name:'name2',content:'content2'},{name:'name3',content:'content3'}]} />);
    component.find('.buttonWrapper > .right').simulate('click',{target:{innerText:'Next'}});
    component.find('.buttonWrapper > .right').simulate('click',{target:{innerText:'Next'}});
    component.find('.buttonWrapper').childAt(2).simulate('click',{target:{innerText:'Restart'}});
    expect(component.find(SlideWrapper).prop('slideNumber')).toBe(0);
  })




it("SlideNavigation components previous button disabled",()=>{
  const component = mount(<SlideNavigation slideShowArray={[{name:'name1',content:'content1'},{name:'name2',content:'content2'},{name:'name3',content:'content3'}]} />);
  expect(component.find('.buttonWrapper > .left').prop('disabled')).toBe(true);
  component.unmount();
})
