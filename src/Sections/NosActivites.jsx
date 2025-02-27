import React from 'react'
import { activités } from '../constants'
import ActivityCard from '../Components/ActivityCard'

const NosActivites = () => {
  return (
    <section className="w-full flex flex-col xl:flex-row items-center  xl:items-start xl:gap-10 xl:-mt-24 xl:p-2 text-center xl:px-0 xl:-ml-8">
  {/* Left Section */}
  <div className="flex flex-col justify-end xl:items-start mditems-center xl:mt-0 xl:w-2/3 w-full pb-10 text-base/8 -mt-16  ">
    <h2 className="text-lg font-extrabold text-yellow-500  leading-[24px] mt-20 xl:ml-8 ">
      Everything you need
    </h2>
    <h1 className="text-3xl font-extrabold leading-[36px] mt-2  xl:ml-8 ">
      Nos activités
    </h1>
    <p className="text-lg font-medium xl:text-left text-center mt-4 text-gray-600 xl:ml-8  leading-normal">
      Notre ambition est de vous servir tout en mettant en œuvre les meilleures pratiques issues du savoir-faire acquis
      au cours des nombreux projets réalisés pour différents clients.
    </p>
  </div>

  {/* Right Section */}
  <div className="xl:w-3/2 w-full mt-0 xl:mt-16 shadow-md rounded-md">
    <div className="bg-white grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      {activités.map((activity) => (
        <ActivityCard key={activity.label} {...activity} />
      ))}
    </div>
  </div>
</section>

  )
}

export default NosActivites;
