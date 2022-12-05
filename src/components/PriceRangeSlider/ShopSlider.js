import ShopSliderScss from "./ShopSlider.module.scss"


const ShopSlider = () => {


function sliderMove(e) {

let x = e.target.value
let color = 'background:linear-gradient(90deg, rgb(246,107,14)' + x + '%, rgb(214,214,214)' + x + '%)' 
e.target.style = color


}

  return (
    <>
         <div className='bg-primary-default rounded-full w-[100%] mt-5 flex justify-between items-center'>
              <div className='text-white p-3 w-[20  %]' >Price Range: 0</div> 
              <div className="w-[60%]"><input type="range" min="1" max="99999999" defaultValue="0" id="myRange" class={ShopSliderScss.slider} onInput={sliderMove} /></div>
              <div className='text-white p-3 w-[15%]'>999</div>
        </div>


    </>
  )
}

export default ShopSlider