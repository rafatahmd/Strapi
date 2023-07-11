import React from 'react'



function Step(props) {

    const steps = [
        {
            name:'Step.1',
            text:'Effortlessly create content structures that flex to your needs',
            des:'df dfr dfdfg dfdfg efd dfggfg ddfdf dftty  ddddd ddddd ddddd dddd dd d  dddd d d dd dddd dddd dddd ',
            url:'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-step1-2D_aeea862f0b.svg',
        },
        {
            name:'Step.2',
            text:'Effortlessly create content structures that flex to your needs',
            des:'df dfr dfdfg dfdfg efd dfggfg ddfdf dftty  ddddd ddddd ddddd dddd dd d  dddd d d dd dddd dddd dddd ',
            url:'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/step_5_homepage_cbf3f1abd7.png',
        },
        {
            name:'Step.3',
            text:'Effortlessly create content structures that flex to your needs',
            des:'df dfr dfdfg dfdfg efd dfggfg ddfdf dftty  ddddd ddddd ddddd dddd dd d  dddd d d dd dddd dddd dddd ',
            url:'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp_step3_2_D_7bc731eae8_2_12fb3c2384_bd354b38ca.png',
        },
        {
            name:'Step.4',
            text:'Effortlessly create content structures that flex to your needs',
            des:'df dfr dfdfg dfdfg efd dfggfg ddfdf dftty  ddddd ddddd ddddd dddd dd d  dddd d d dd dddd dddd dddd ',
            url:'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-step1-2D_aeea862f0b.svg',
        },
        {
            name:'Step.5',
            text:'Effortlessly create content structures that flex to your needs',
            des:'df dfr dfdfg dfdfg efd dfggfg ddfdf dftty  ddddd ddddd ddddd dddd dd d  dddd d d dd dddd dddd dddd ',
            url:'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-step4-2D_9ab379c7f5.svg',
        },
        
    ]

  return (
    <>
    {steps.map((step,index)=>(
        <div className='border-none mx-auto w-9/12 bg-white shadow-xs grid grid-cols-2 items-center justify-center gap-x-40 gap-y-10 py-8 mb-40 '>
        {index%2==0?<><img className='mx-auto' src={step.url} alt='ddf'/> <div className='w-1/2'>
            <p className='font-semibold text-yellow-500'>{step.name}</p>
            <p className='text-xl font font-semibold text-indigo-800 mt-10'>{step.text}</p>
            <p className='text-lg  text-cyan-700 mt-10'>{step.des} </p>
        </div></> :<> <div className='w-1/2 mx-auto'>
            <p className='font-semibold text-yellow-500'>{step.name}</p>
            <p className='text-xl font font-semibold text-indigo-800 mt-10'>{step.text}</p>
            <p className='text-lg  text-cyan-700 mt-10'>{step.des} </p>
        </div><img  src={step.url} alt='ddf'/></>}  
    </div>

    ))}
    {/* <div className='border-none mx-auto w-9/12 bg-white shadow-lg grid grid-cols-2 items-center justify-center gap-x-40 gap-y-10 py-8 '>
    <img className='mx-auto' src={props.info.url} alt='ddf'/> <div className='w-1/2'>
            <p className='font-semibold text-yellow-500'>{props.info.name}</p>
            <p className='text-xl font font-semibold text-indigo-800 mt-10'>{props.info.text}</p>
            <p className='text-lg  text-cyan-700 mt-10'>{props.info.des} </p>
        </div>
</div> */}
   </>
  )
}

export default Step
