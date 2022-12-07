import React from 'react'
import HeroOptionCard from '../HeroOptionCard/HeroOptionCard'

const HeroOptions = () => {
  return (
    <div className='option-containers d-flex-row'>
      <HeroOptionCard title={"CHARACTERS"} />
      <HeroOptionCard title={"COMICS"} />
      <HeroOptionCard title={"SERIES"} />
    </div>
  )
}

export default HeroOptions