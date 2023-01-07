import React from 'react'
import ShopSlider from './ShopSlider'
import { useState } from 'react';

function SilderApp() {
    const [value,setValue] = useState(500);

    const handleChange = (e) => {
      setValue(e.target.value);
    }

  return (
    <div>
        <ShopSlider value={value} handleChange={handleChange} min={1} max={1000} />
    </div>
  )
}

export default SilderApp