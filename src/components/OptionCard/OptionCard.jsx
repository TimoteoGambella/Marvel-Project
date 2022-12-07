import React from 'react'

const OptionCard = ({title}) => {
  return (
    <div className="option-card">
      <p className='font-family-marvel-roboto option-card-text'>{title}</p>
    </div>
  )
}

export default OptionCard