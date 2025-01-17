import React from 'react'
import { FeaturesSectionWithHoverEffects } from './ui/Feature-Section-with-hover-effects'

function Skills() {
  return (
    <div className="min-h-screen w-full flex align-middle justify-center  bg-black/[0.96]">
      <div className="">
        <div className='m-8 '>
            <h1> Skills</h1>
        </div>
        <div className='mt-4 p-8'>

        <FeaturesSectionWithHoverEffects />
        </div>
    </div>
    </div>
  )
}

export default Skills