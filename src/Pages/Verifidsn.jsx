import React from 'react'
import VerifidsnHero from '../Sections/Verifi\'dsn/VerifidsnHero'
import ControlDsn from '../Sections/Verifi\'dsn/ControlDsn'
import AllSteps from '../Sections/Verifi\'dsn/AllSteps'
import VerifyFooter from '../Sections/Verifi\'dsn/VerifyFooter'

const Verifidsn = () => {
  return (
    <main className="">
       <section className=''>
      <VerifidsnHero />
      </section>
      <section className="bg-[url('/src/assets/images/cover.png')] bg-cover bg-no-repeat padding small-screen-bg md:bg-gray-50 bg-gray-50">
                <ControlDsn />
              </section>
              <section className="bg-[url('/src/assets/images/containerrr.png')] bg-cover bg-no-repeat padding small-screen-bg md:bg-gray-50 bg-gray-50">
                <AllSteps />
              </section>
              <section className=" bg-cover bg-no-repeat   bg-gray-50">
                <VerifyFooter />
              </section>
      </main>
  )
}

export default Verifidsn