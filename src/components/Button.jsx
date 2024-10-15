import React from 'react'

const Button = () => {
  return (
    <div className='w-full text-center py-4'>
      <a href="#" className="btn btn-dark fs-6 btn-lg mb-2 mb-md-0 me-md-3"> {/* Added margin bottom for small screens */}
        Let's Connect
        </a>
    </div>
  )
}

export default Button
