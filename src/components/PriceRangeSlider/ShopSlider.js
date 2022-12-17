import ShopSliderScss from "./ShopSlider.module.scss"


function ShopSlider ({value,handleChange,min,max}) {


  return (
    <>
         <div className='bg-primary-default rounded-full w-[100%] mt-5 flex justify-between items-center flex-no-wrap h-[50px]'>
              <div className='text-white p-3 w-[20 %]' > Price Range: {value}</div> 
              <div className="w-[15%] absolute ml-[10rem]"><input type="range" min={min} max={max} defaultValue={value} onChange={handleChange} class={ShopSliderScss.slider}/></div>
              <div className='text-white p-3 w-[15%]'>{max}</div>
        </div>


    </>
  )
}

export default ShopSlider