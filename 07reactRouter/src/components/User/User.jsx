import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userid} =useParams()
  return (
    <div className='text-center bg-yellow-600 text-3xl p-4x m-5'>User:{userid}</div>
  )
}
