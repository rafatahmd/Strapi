import React from 'react'

const images = [
    {
        url:'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/orion_health_logo_grey_09bd33f2a3.svg'
    },
    {
        url:'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/toyota_91b7b86cc6.svg'
    },
    {
        url:'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Logo_engie_1_7860d8a8f7.svg'
    },
    {
        url:'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/walmart_270d4a7ce1.svg'
    },
    {
        url:'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Delivery_NB_17f8d97df5.svg'
    },
    {
        url:'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/NASA_NB_dc288f8032.svg'
    },
    {
        url:'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Accenture_1_e2a6211ba4.svg'
    },
    {
        url:'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/ibm_1_337fde51ba.svg'
    },
    {
        url:'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/ebay_1_300eb16d19.svg'
    },
    
]

function SectionFooter() {
  return (
    <div className=' mx-auto w-10/12 flex gap-14 p-4 my-10 py-10  items-center text-center   '>
        {images.map((image)=>(
            <img className='h-14  py-4' src={image.url} alt='sd'/>
        ))}
    </div>
  )
}

export default SectionFooter
