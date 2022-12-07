import React from 'react'
import OptionCard from '../OptionCard/OptionCard'

const HeroOptions = () => {
  return (
    <div className='option-containers d-flex-row'>
      <OptionCard title={"CHARACTERS"} />
      <OptionCard title={"COMICS"} />
      <OptionCard title={"SERIES"} />
    </div>
  )
}

export default HeroOptions