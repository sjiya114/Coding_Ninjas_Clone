import React from 'react'
import { NavLink } from 'react-router-dom'
function Subbar() {
  return (
    <div className='max-w-screen-xl rounded-lg mx-auto text-sm text-black border-2 flex flex-row max-md:flex-col max-md:space-y-4 max-md:ml-10 max-md:mr-10 max-md:mb-10 justify-between border-gray-400 bg-gray-100 px-4 py-4 '>
      <NavLink className="hover:border-2 hover:border-gray-600 hover:bg-gray-200 hover:px-1 hover:py-1 hover:rounded-lg">Curriculum</NavLink>
      <NavLink className="hover:border-2 hover:border-gray-600 hover:bg-gray-200 hover:px-1 hover:py-1 hover:rounded-lg">The IIT experience</NavLink>
      <NavLink className="hover:border-2 hover:border-gray-600 hover:bg-gray-200 hover:px-1 hover:py-1 hover:rounded-lg">Course benefits</NavLink>
      <NavLink className="hover:border-2 hover:border-gray-600 hover:bg-gray-200 hover:px-1 hover:py-1 hover:rounded-lg">Career support</NavLink>
      <NavLink className="hover:border-2 hover:border-gray-600 hover:bg-gray-200 hover:px-1 hover:py-1 hover:rounded-lg">Faculty</NavLink>
      <NavLink className="hover:border-2 hover:border-gray-600 hover:bg-gray-200 hover:px-1 hover:py-1 hover:rounded-lg">Testimonials</NavLink>
    </div>
  )
}

export default Subbar
