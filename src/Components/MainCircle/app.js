const boxx = document.getElementById('boxx')
const boxxBg=document.getElementById('boxx-bg')
const boxxOneBorder = document.querySelectorAll('#boxx .segment');
const boxCircle = document.getElementById('box-circle');
 var segments = document.querySelectorAll('#box-circle .segment');
 const CloseButton=document.getElementById('close');


 const removeBorderColor = (number) => {
  if (number === 1) {
    segments[1].style.borderColor = 'green';
    segments[2].style.borderColor = 'blue';
    segments[3].style.borderColor = 'orange';
    segments[4].style.borderColor = 'gray';
  }
  if (number === 2) {
    segments[0].style.borderColor = 'white';
    segments[2].style.borderColor = 'blue';
    segments[3].style.borderColor = 'orange';
    segments[4].style.borderColor = 'gray';
  }
  if (number === 3) {
    segments[0].style.borderColor = 'white';
    segments[1].style.borderColor = 'green';
    segments[3].style.borderColor = 'orange';
    segments[4].style.borderColor = 'gray';
  }
  if (number === 4) {
    segments[0].style.borderColor = 'white';
    segments[1].style.borderColor = 'green';
    segments[2].style.borderColor = 'blue';
    segments[4].style.borderColor = 'gray';
  }
  if (number === 5) {
    segments[0].style.borderColor = 'white';
    segments[1].style.borderColor = 'green';
    segments[2].style.borderColor = 'blue';
    segments[3].style.borderColor = 'orange';
  }
  if (number === 0) {
    segments[0].style.borderColor = 'white';
    segments[1].style.borderColor = 'green';
    segments[2].style.borderColor = 'blue';
    segments[3].style.borderColor = 'orange';
    segments[4].style.borderColor = 'gray';
  }
}


const removeClassName = (number) => {
  if (number === 1) {
    boxCircle.classList.remove('secondBoxLine')
    boxCircle.classList.remove('thirdBoxLine')
    boxCircle.classList.remove('fourthBoxLine')
    boxCircle.classList.remove('feefthBoxLine')
  }
  if (number === 2) {
    boxCircle.classList.remove('firstBoxLine')
    boxCircle.classList.remove('thirdBoxLine')
    boxCircle.classList.remove('fourthBoxLine')
    boxCircle.classList.remove('feefthBoxLine')
  }
  if (number === 3) {
    boxCircle.classList.remove('firstBoxLine')
    boxCircle.classList.remove('secondBoxLine')
    boxCircle.classList.remove('fourthBoxLine')
    boxCircle.classList.remove('feefthBoxLine')
  }
  if (number === 4) {
    boxCircle.classList.remove('firstBoxLine')
    boxCircle.classList.remove('secondBoxLine')
    boxCircle.classList.remove('thirdBoxLine')
    boxCircle.classList.remove('feefthBoxLine')
  }
  if (number === 5) {
    boxCircle.classList.remove('firstBoxLine')
    boxCircle.classList.remove('secondBoxLine')
    boxCircle.classList.remove('thirdBoxLine')
    boxCircle.classList.remove('fourthBoxLine')
  }
  if (number === 6) {
    boxCircle.classList.remove('firstBoxLine')
    boxCircle.classList.remove('secondBoxLine')
    boxCircle.classList.remove('thirdBoxLine')
    boxCircle.classList.remove('fourthBoxLine')
    boxCircle.classList.remove('feefthBoxLine')
  }
}

function useState(initialValue) {
    let state = initialValue; // Initial state
    
    function setState(newValue) {
      state = newValue; // Update the state
    }
    
    return [state, setState]; // Return state and setter function as an array
  }
  let BoxOpened=false
  const [RotaionState,setRotaionState]=useState(0);
  // const myNumber = 200; // Your desired number
  
  // // Set the CSS variable value dynamically
  // document.documentElement.style.setProperty('--my-number', myNumber);
  
  // // Retrieve the value of a CSS variable
  // const rootStyles = getComputedStyle(document.documentElement);
  // const myVariableValue = rootStyles.getPropertyValue('--my-number').trim();
  
  // console.log(myVariableValue); // Output: "100px"
  

      function changeSegmentColorMain(number) {
       
      
        boxx.style.animationName='boxx'
        boxx.classList.remove('boxx')
        setTimeout(() => {
  CloseButton.style.display='block'

}, 3000);
BoxOpened=true;
document.body.style.pointerEvents = "none";
// document.body.style.filter = "blur(5px)";
// boxxBg.style.filter = "none";
// if(BoxOpened===true){

setTimeout(() => {
  document.body.style.backdropFilter='blur(5px)'

    // document.body.addEventListener("mouseleave", function(event) {
    // if(BoxOpened){
    //   if (event.target !== boxxBg) {
    //     Toastify({
    //       text: "If you want to hit Anywhere...Close First!",
    //       duration: 1500,
    //       close: true,
    //       gravity: "top",
    //       backgroundColor: "#333",
    //     }).showToast();
  
    //   }
    // }
    // });
  }, 3000);
// }
  boxxBg.style.pointerEvents='auto'
// }
        
  
        
        const rotateTwoBorder=()=>{
          setTimeout(() => {
              boxxOneBorder[1].style.transform = 'rotate(210deg)';
              boxxOneBorder[2].style.transform = 'rotate(150deg)';
              setTimeout(() => {
                  boxxBg.classList.add('boxx-bg')
              }, 1000);
  
          }, 1500);
        }
        const rotateBackTwoBorder=()=>{
          boxxOneBorder[1].style.transform = 'rotate(180deg)';
          boxxOneBorder[2].style.transform = 'rotate(180deg)';
          boxxBg.classList.remove('boxx-bg')
  
        }
        if (number === 1) {
            console.log(0)
          boxCircle.classList.add('firstBoxLine')
          removeClassName(1)
          removeBorderColor(1)
          rotateBackTwoBorder()
          setTimeout(() => {
            boxx.classList.add('boxx')
            segments[0].style.borderColor = 'transparent';
            boxxOneBorder[0].style.borderColor = 'white'
            boxxOneBorder[1].style.borderColor = 'white'
            boxxOneBorder[2].style.borderColor = 'white'
            rotateTwoBorder()
          }, 1000);
        
  
        }
  
        if (number === 2) {
            // const aabbaa=document.querySelector('.middle-circle')
            // aabbaa.style.transform='rotate(-18deg)'
          boxCircle.classList.add('secondBoxLine')
          removeClassName(2)
          removeBorderColor(2)
          rotateBackTwoBorder()
          setTimeout(() => {
            boxx.classList.add('boxx')
            segments[1].style.borderColor = 'transparent';
            boxxOneBorder[0].style.borderColor = 'green'
            boxxOneBorder[1].style.borderColor = 'green'
            boxxOneBorder[2].style.borderColor = 'green'
            rotateTwoBorder()
          }, 1000);
        }
        if (number === 3) {
          boxCircle.style.transform = 'rotate(0deg)'
          removeClassName(3)
          removeBorderColor(3)
          rotateBackTwoBorder()
          setTimeout(() => {
            boxx.classList.add('boxx')
            segments[2].style.borderColor = 'transparent';
            boxxOneBorder[0].style.borderColor = 'blue'
            boxxOneBorder[1].style.borderColor = 'blue'
            boxxOneBorder[2].style.borderColor = 'blue'
            rotateTwoBorder()
          }, 500);
        }
  
        if (number === 4) {
          boxCircle.classList.add('fourthBoxLine')
          removeClassName(4)
          removeBorderColor(4)
          rotateBackTwoBorder()
          setTimeout(() => {
            boxx.classList.add('boxx')
            segments[3].style.borderColor = 'transparent';
            boxxOneBorder[0].style.borderColor = 'orange'
            boxxOneBorder[1].style.borderColor = 'orange'
            boxxOneBorder[2].style.borderColor = 'orange'
            rotateTwoBorder()
          }, 1000);
        }
        if (number === 5) {
          boxCircle.classList.add('feefthBoxLine')
          removeClassName(5)
          removeBorderColor(5)
          rotateBackTwoBorder()
          setTimeout(() => {
            boxx.classList.add('boxx')
            segments[4].style.borderColor = 'transparent';
            boxxOneBorder[0].style.borderColor = 'gray'
            boxxOneBorder[1].style.borderColor = 'gray'
            boxxOneBorder[2].style.borderColor = 'gray'
            rotateTwoBorder()
          }, 1000);
        }
        console.log(BoxOpened);
      }
      
      function CloseBox (){
        document.body.style.backdropFilter='blur(0px)'

        document.body.style.pointerEvents = "auto";
        CloseButton.style.display='none'
        BoxOpened=false
        boxxOneBorder[1].style.transform = 'rotate(180deg)';
        boxxOneBorder[2].style.transform = 'rotate(180deg)';
        boxxBg.classList.remove('boxx-bg')
        boxx.style.animationName='boxxClose'
        setTimeout(() => {
          boxx.classList.remove('boxx')
          removeBorderColor(0)
        }, 1000);
        setTimeout(() => {
          removeClassName(6)
          boxCircle.style.transform='rotate(0deg)'
        }, 1300);
        console.log(BoxOpened);
      }
      console.log(BoxOpened);
     
     
    
      // Make body clickable again
      // document.body.style.pointerEvents = "auto";