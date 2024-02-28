
import React from 'react'

function NoticeCard({children}) {
  return (
    <div className='bg-blue-600 rounded shadow-custom-black p-6 '>
        {children}
    </div>
  )
}

export default NoticeCard
