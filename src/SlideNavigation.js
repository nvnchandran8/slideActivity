import React,{useState,useEffect,useRef} from "react";
import SlideWrapper from "./SlideWrapper";
import SlideComponent from "./SlideComponent";

const SlideNavigation = ({slideShowArray}) => {
  const [slideState,changeSlideState] = useState(0);
  const slide = useRef(null);
  const changeSlide = (e) => {
    if(e.target.innerText === 'Previous'){
      changeSlideState(slideState-1)
    }
    else if(e.target.innerText === 'Next'){
      changeSlideState(slideState+1)
    }
    else if(e.target.innerText === 'Restart'){
      changeSlideState(0)
    }
  }
  useEffect(()=>{
    let {width} = slide.current.getBoundingClientRect();
    slide.current.scrollTo({
  top: 100,
  left: slideState*width,
  behavior: 'smooth'
})
  },[slideState])

  return (
    <div>
    <div className="slideWrapper" ref={slide} >
    <SlideWrapper slideComponent={SlideComponent} slideContent={slideShowArray[slideState]} slideNumber={slideState} totalSlides={slideShowArray.length} refPass={slide} />
    </div>
    <div className="buttonWrapper">
    <button onClick={changeSlide} disabled={slideState===0} className="left">Previous</button>
    <button onClick={changeSlide} disabled={slideState===slideShowArray.length-1} className="right">Next</button>
    <button onClick={changeSlide}>Restart</button>
    </div>
    </div>
  )
}

export default SlideNavigation;
