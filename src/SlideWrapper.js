import React from 'react';

class SlideWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  static getDerivedStateFromProps(props,state){
    if(props.refPass.current!==null && !state.totalWidth && !state.left && !state.childWidth){
      return {
        totalWidth: props.refPass.current.offsetWidth*props.totalSlides,
        left: 0,
        childWidth: props.refPass.current.offsetWidth,
      }
    }
  }

  componentDidUpdate(prevProps,prevState){
    if(prevProps.slideNumber!==this.props.slideNumber){
      this.setState({
        left:this.state.childWidth*this.props.slideNumber
      })
    }
  }

  render(){
    const {slideContent,slideNumber} = this.props;
    return (    <div className="innerSlideWrapper" style={{width:this.state.totalWidth}}>
    <div style={{left:this.state.left,position:'relative'}}>
    <this.props.slideComponent slideContent={slideContent} slideNumber={slideNumber} displayWidth={this.state.childWidth || 0} />
    </div>
    </div>)
  }
}

export default SlideWrapper;
