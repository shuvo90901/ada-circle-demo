import React, { useState } from 'react';
import './FourthCircl.css'

const FourthCircle = () => {
  const [isBottomLine, setIsBottomLine] = useState(false);
  const [isLeftLine,setIsLeftLine]=useState(false)
  const [isRightLine,setIsRightLine]=useState(false)

  const changeSegmentColor=(number)=>{
    var segments = document.querySelectorAll('#circle .segment');

    if(number===1){
      setIsBottomLine(true)
      setIsLeftLine(false)
      setIsRightLine(false)
      segments[1].style.borderColor = 'gray';

      setTimeout(() => {
        segments[2].style.borderColor = 'white';
        segments[0].style.borderColor = 'white';
      }, 1000);
    }
    if(number===2){
      setIsBottomLine(false)
      setIsLeftLine(true)
      setIsRightLine(false)
      segments[2].style.borderColor = 'gray';

          setTimeout(() => {
            segments[1].style.borderColor = 'white';
            segments[0].style.borderColor = 'white';
          }, 1000);
    }
    if(number===3){
      setIsBottomLine(false)
      setIsLeftLine(false)
      setIsRightLine(true)
      segments[0].style.borderColor = 'gray';

          setTimeout(() => {
            segments[1].style.borderColor = 'white';
            segments[2].style.borderColor = 'white';
          }, 1000);
    }
  }
 
    return (
        <div class="fourth-circle z-50">
        <div id="circle">
          <div class={`segment ${isBottomLine && 'bottomLine'}`} onClick={()=>changeSegmentColor(1)}></div>
          <div class={`segment ${isLeftLine && 'leftLine'}`} onClick={()=>changeSegmentColor(2)}></div>
          <div class={`segment ${isRightLine && 'rightLine'}`} onClick={()=>changeSegmentColor(3)}></div>
        </div>
      </div>
    );
};

export default FourthCircle;