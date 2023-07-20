import React from 'react'

const Wrapper = ({children, className}) => {
  return (
    <div className={`w-full max-w-[1280px] px-2 md:px-6 mx-auto ${className || ""}`}>{children}</div>
  )
}

export default Wrapper