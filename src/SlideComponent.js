import React from 'react';

class SlideComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      slideNumber:this.props.slideNumber
    }
  }
  // static getDerivedStateFromProps(props,state){
  //   let {width} = document.querySelector('.slideWrapper')!==null
  //   &&document.querySelector('.slideWrapper').getBoundingClientRect();
  //   if(props.slideNumber!==state.slideNumber){
  //     return {
  //       slideNumber:props.slideNumber,
  //       left:props.slideNumber*width
  //     }
  //   }
  // }
  // componentDidMount(){
  //   let {width} = document.querySelector('.slideWrapper').getBoundingClientRect();
  //   this.setState({
  //     width,left:this.state.slideNumber*width
  //   })
  // }

  render(){
    const {width,left} = this.state;
    const {slideContent} = this.props;
    return (
      <div className="slideComponent" style={{width:this.props.displayWidth}} ref={this.slideRef}>{slideContent&&slideContent.content}</div>
    )
  }
}

export default SlideComponent;
