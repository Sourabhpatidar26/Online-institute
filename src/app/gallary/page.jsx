"use client"
import React, { Fragment, useState } from 'react'
import Filter from '../../../components/Filter'
import Card from '../../../components/Card'

function Gallary() {
  const [view, setView] = useState('grid');

  return (
    <Fragment>
      <Filter title="Gallary" view={view} setView={setView} />
      <div className={`mt-5 grid ${view === 'grid' ? 'grid-view grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4' : 'list-view grid-cols-1 gap-2'}`}>
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

export default Gallary;
