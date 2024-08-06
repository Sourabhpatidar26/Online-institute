import React, { Fragment } from 'react'
// import '../assets/sass/style.scss'
import Card from '../../components/Card'
import Filter from '../../components/Filter/Filter'

function LiveSession() {
  return (
    <Fragment>
      <Filter />
      <div className='mt-5 grid grid-cols-1 lg:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-4'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
      </div>
    </Fragment>
  )
}

export default LiveSession
