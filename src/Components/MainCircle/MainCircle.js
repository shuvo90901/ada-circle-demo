import React from 'react';
import './MainCircle.css'
import MemoryBox from '../MemoryBox/MemoryBox';
import FourthCircle from '../FourthCircle/FourthCircle';

const MainCircle = () => {
    return (
<div className='flex justify-center items-center h-screen'>
      <div class="main-circle rounded-full bg-[#3a3857] ">


      <div class="second-circle grid justify-center items-center">
        <MemoryBox/>
        <FourthCircle/>
        </div>
        </div>
        </div>
    );
};

export default MainCircle;