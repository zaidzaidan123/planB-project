import React from 'react'
import ToggleSwitch from './toggleNumber'

const ExpertGuideCard = ({number,title,paragraph}) => {
  return (
    <div>
        <ToggleSwitch number={number}/>
        <h2 className='font-bold text-2xl'>{title}</h2>
        <p className='text-base text-[#8A8890]'>{paragraph}</p>
    </div>
  )
}

export default ExpertGuideCard