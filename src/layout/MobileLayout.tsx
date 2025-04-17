import React, { useEffect, useState } from 'react'

const MobileLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className='py-[40%] pr-[100px] h-dvh relative'>
      <div 
        className={`fixed left-0 h-[.5px] w-0 bg-slate transition-all duration-2000 ease-out ${
          isLoaded ? 'w-full' : ''
        }`}
      />
      {children}
      <div 
        className={`fixed left-0 h-[.5px] w-0 bg-slate transition-all duration-2000 ease-out ${
          isLoaded ? 'w-full' : ''
        }`}
      />
      <div 
        className={`fixed top-0 right-[100px] h-0 w-[.5px] bg-slate transition-all duration-2000 ease-out ${
          isLoaded ? 'h-full' : ''
        }`}
      />
    </div>
  )
}

export default MobileLayout