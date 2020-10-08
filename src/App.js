import React from "react";
import SlideNavigation from "./SlideNavigation";
import "./style.css";

export default function App() {
  return (
    <div>
    <SlideNavigation slideShowArray={[{name:'name1',content:'content1'},{name:'name2',content:'content2'},{name:'name3',content:'content3'},{name:'name4',content:'content4'},{name:'name5',content:'content5'}]} />
    </div>
  );
}
