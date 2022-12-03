import React from 'react'
import "./ShopSlider.scss"


const ShopSlider = () => {


function sliderMove(e) {

let x = e.target.value
let color = 'background:linear-gradient(90deg, rgb(246,107,14)' + x + '%, rgb(214,214,214)' + x + '%)' 
e.target.style = color


}

  return (
    <>
         <div className='bg-container rounded-full items-center justify-center'>
          <div class="slideContainer">
            <span className='text-white pr-3 ' >Price Range: 0</span> 
            <input type="range" min="1" max="99999999" defaultValue="0" id="myRange" class="slider" onMouseMove={sliderMove} />
            <span className='text-white p-3'>99999999</span>
          </div>
        </div>


    </>
  )
}

export default ShopSlider