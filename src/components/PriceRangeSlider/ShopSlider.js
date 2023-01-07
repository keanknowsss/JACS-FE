import ShopSliderScss from "./ShopSlider.module.scss"


function ShopSlider ({value,handleChange,min,max}) {


  return (
    <>
         <div className={ShopSliderScss.outerDiv}>
              <div className='text-white p-3 w-[20 %]' > Price Range: {value}</div> 
              <div className={ShopSliderScss.sliderDiv}><input type="range" min={min} max={max} defaultValue={value} onChange={handleChange} class={ShopSliderScss.slider}/></div>
              <div className='text-white p-3'>{max}</div>
        </div>


    </>
  )
}

export default ShopSlider