import { useEffect, useState } from 'react'
import Header from './components/header'
import Navbar from './components/navbar'
import Video from './components/video'
import { useRef } from 'react'

function App() {

  const [enableHamburger, setEnableHamburger] =  useState(false);
  const headerRef = useRef(null);


  return (
    <div className={enableHamburger == true && ` h-screen overflow-hidden`}>
      <Header ref={headerRef} hamburgerBehaviour={() => {if(enableHamburger == true) { setEnableHamburger(false) } else { setEnableHamburger(true)} } }/>
      <div className='flex'>
        {
          enableHamburger &&
          <Navbar hamburgerBehaviour={() => {if(enableHamburger == true) { setEnableHamburger(false) } else { setEnableHamburger(true)} } }/>
        }
        <div className={`flex w-screen justify-center items-center`}>
          <div className='w-full grid grid-cols-3 grid-rows-4 gap-5 mt-10 p-10'>
            <Video ref={headerRef}/>
            <Video ref={headerRef}/>
            <Video ref={headerRef}/>
            <Video ref={headerRef}/>
            <Video ref={headerRef}/>
            <Video ref={headerRef}/>
            <Video ref={headerRef}/>
            <Video ref={headerRef}/>
            <Video ref={headerRef}/>
            <Video ref={headerRef}/>
            <Video ref={headerRef}/>
            <Video ref={headerRef}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
