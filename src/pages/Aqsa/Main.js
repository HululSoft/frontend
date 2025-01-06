import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div>
        <div className='poster'>
          <Link to="/aqsana/poster">Poster</Link>
        </div>
        <div className='poster'></div>
    </div>
  )
}
