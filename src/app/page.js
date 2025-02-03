import React from 'react'

import Header from './components/Header'
import Skills from './components/Skills'
import Project from './components/Project'
import SobreMi from './components/SobreMi'
import { Footter } from './components/Footter'
import { Contacto } from './components/Contacto'
import TheTitle from './components/TheTitle'


const Home = () => {
  return (
    <div >

      <Header />
      <SobreMi />
      <Skills />
      <Project />

      <Contacto />
      <Footter />
    </div>
  )
}

export default Home
