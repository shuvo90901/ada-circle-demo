import React, { useState } from 'react';
import './MemoryBox.css'
import { AiOutlineClose } from "react-icons/ai";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MemoryBox = () => {
  const [isFirstBoxLine,setIsFirstBoxLine]=useState(false)
  const [isSecondBoxLine,setIsSecondBoxLine]=useState(false)
  const [isThirdBoxLine,setIsThirdBoxLine]=useState(false)
  const [isFourthBoxLine,setIsFourthBoxLine]=useState(false)
  const [isFifthBoxLine,setIsFifthBoxLine]=useState(false)
  const [isBoxOpened,setIsBoxOpened]=useState(false)
  const [isToasted,setIsToasted]=useState(false)


  const removeBorderColor = (number) => {
    var segments = document.querySelectorAll('#box-circle .segment');

    
    if (number === 0) {
      segments[0].style.borderColor = 'white';
      segments[1].style.borderColor = 'green';
      segments[2].style.borderColor = 'blue';
      segments[3].style.borderColor = 'orange';
      segments[4].style.borderColor = 'gray';
    }
  }
  const changeSegmentColorMain=(number)=>{
    const boxxOneBorder = document.querySelectorAll('#boxx .segment');
    const boxxBg=document.getElementById('boxx-bg')
    var segments = document.querySelectorAll('#box-circle .segment');

    document.body.style.pointerEvents = "none";
    boxxBg.style.pointerEvents='auto'
    // document.body.addEventListener("mouseleave", function(event) {
    //   if(isBoxOpened){
    //     if (event.target !== boxxBg) {
          
    
    //     }
    //   }
    //   });


    boxxBg.classList.remove('boxx-bg')
    boxxOneBorder[1].style.transform = 'rotate(180deg)';
    boxxOneBorder[2].style.transform = 'rotate(180deg)';
    removeBorderColor(0)
 const boxOpen=()=>{
  setTimeout(() => {
    setIsBoxOpened(true)
      setTimeout(() => {
              boxxOneBorder[1].style.transform = 'rotate(210deg)';
              boxxOneBorder[2].style.transform = 'rotate(150deg)';
              setIsToasted(true)
              setTimeout(() => {
                  boxxBg.classList.add('boxx-bg')
              }, 1000);
  
          }, 1500);
  }, 1000);
 }
 const BorderBoxColor=(color)=>{
  boxxOneBorder[0].style.borderColor = color
  boxxOneBorder[1].style.borderColor = color
  boxxOneBorder[2].style.borderColor = color
 }
    if(number===1){
      setIsFirstBoxLine(true)
      boxOpen()
      setTimeout(() => {
        segments[0].style.borderColor = 'transparent';
        BorderBoxColor('white')
      }, 1000);

    }
    if(number===2){
      setIsSecondBoxLine(true)
      boxOpen()
      setTimeout(() => {
        segments[1].style.borderColor = 'transparent';
        BorderBoxColor('green')
      }, 1000);
    }
    if(number===3){
      setIsThirdBoxLine(true)
      boxOpen()
      setTimeout(() => {
        segments[2].style.borderColor = 'transparent';
        BorderBoxColor('blue')
      }, 500);
    }
    if(number===4){
      setIsFourthBoxLine(true)
      boxOpen()
      setTimeout(() => {
        segments[3].style.borderColor = 'transparent';
        BorderBoxColor('orange')
      }, 1000);
    }
    if(number===5){
      setIsFifthBoxLine(true)
      boxOpen()
      setTimeout(() => {
        segments[4].style.borderColor = 'transparent';
        BorderBoxColor('gray')
      }, 1000);
    }
    if(number!==1){
      setIsFirstBoxLine(false)
    }
    if(number!==2){
      setIsSecondBoxLine(false)
    }
    if(number!==3){
      setIsThirdBoxLine(false)
    }
    if(number!==4){
      setIsFourthBoxLine(false)
    }
    if(number!==5){
      setIsFifthBoxLine(false)
    }
  }
  const CloseBox=()=>{
    const boxxOneBorder = document.querySelectorAll('#boxx .segment');
    const boxxBg=document.getElementById('boxx-bg')
    const boxCircle = document.getElementById('box-circle');
    setIsToasted(false)

    boxxBg.classList.remove('boxx-bg')
    boxxOneBorder[1].style.transform = 'rotate(180deg)';
    boxxOneBorder[2].style.transform = 'rotate(180deg)';
    document.body.style.pointerEvents = "auto";

    setTimeout(() => {
      boxCircle.classList.remove('firstBoxLine')
      boxCircle.classList.remove('secondBoxLine')
      boxCircle.classList.remove('thirdBoxLine')
      boxCircle.classList.remove('fourthBoxLine')
      boxCircle.classList.remove('feefthBoxLine')
      setIsBoxOpened(false)
      removeBorderColor(0)
      // boxCircle.style.transform='rotate(0deg)'
      // boxx.classList.remove()
    }, 1000);
  }
  const MouseLeave=()=>{
   if(isToasted){
    toast('If you want to hit Anywhere...Close First!',{
      autoClose: 500
    });
   }

  }
    return (
        <div class="middle-circle grid justify-center items-center">
          <div id="box-circle" 
          class={`z-50 
          ${isFirstBoxLine && 'firstBoxLine'}
          ${isSecondBoxLine && 'secondBoxLine'}
          ${isThirdBoxLine && 'thirdBoxLine'}
          ${isFourthBoxLine && 'fourthBoxLine'}
          ${isFifthBoxLine && 'feefthBoxLine'}
          `}
          >
            <div class="segment"
             onClick={()=>changeSegmentColorMain(1)} 
             ></div>
            <div class="segment " 
             onClick={()=>changeSegmentColorMain(2)}
            ></div>
            <div class="segment"
             onClick={()=>changeSegmentColorMain(3)}
            ></div>
            <div class="segment " 
             onClick={()=>changeSegmentColorMain(4)}
            ></div>
            <div class="segment" 
             onClick={()=>changeSegmentColorMain(5)}
            ></div>
          </div>
          <div id="boxx" 
          class={`boxxx
          ${isBoxOpened && 'boxx'}
          `}>
           
            <div class="segment z-50"></div>
            <div class="segment z-50"></div>
            <div class="segment z-50"></div>
            
          </div>
          <div id="boxx-bg" onMouseLeave={()=>MouseLeave()} class="">
          <AiOutlineClose onClick={()=>CloseBox()} id="close" title="Close" class={`fa-solid fa-xmark relative top-2 left-1 text-xl text-white ${!isBoxOpened && 'hidden'}`} />
          
           
          </div>

          </div>
    );
};

export default MemoryBox;