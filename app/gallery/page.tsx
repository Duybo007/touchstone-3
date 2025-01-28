import React from 'react'
import Class from '../components/Class'

function page() {
  return (
    <div className='h-screen'>
        <h1 className='text-4xl text-bold pt-8'>Gallery</h1>
        <div className='flex flex-wrap gap-5'>
            <Class />
            <Class />
            <Class />
            <Class />
            <Class />
            <Class />
            <Class />
            <Class />
            <Class />
        </div>
    </div>
  )
}

export default page