import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Skills from './components/Skills'
import Project from './components/Project'
import Footer from './components/Footer'
import Nav from './components/Nav'

const Home = () => {
  return (
    <div className='w-full min-h-screen'>
      <Header/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default Home
