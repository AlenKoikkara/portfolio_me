import React from 'react'

const WebLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='py-[220px] px-[250px] h-full relative'>
      <div className="fixed left-0 h-[.5px] w-full bg-slate"></div>
      <div className="fixed top-0 h-full w-[.5px] bg-slate"></div>
      {children}
      <div className="fixed left-0 h-[.5px] w-full bg-slate"></div>
      <div className="fixed top-0 right-[250px] h-full w-[.5px] bg-slate"></div>
    </div>
  )
}

export default WebLayout