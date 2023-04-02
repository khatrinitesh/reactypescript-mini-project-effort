import React from 'react'
import Navigation from './navigation'
import Posts from './posts'


export default function CustomApp() {

  return (
    <div>
        <Navigation description="Lorem Ipsum" title="App" />
        <Posts />
    </div>
  )
}
