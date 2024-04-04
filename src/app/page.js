import React from 'react'

import Header from './components/Header'
import Skills from './components/Skills'
import Project from './components/Project'
import SobreMi from './components/SobreMi'


const Home = () => {
  return (
    <div className='w-full min-h-screen'>
      <Header/>
      <SobreMi/>
      <Skills/>
      <Project/>
    </div>
  )
}

export default Home
