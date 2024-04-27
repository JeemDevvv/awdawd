import React from 'react'
import Header from '../components/Header'
import Section from '../components/Section'

const Home = () => {
  return (
    <div className='Homepage'>
      <div className="headerCon">
        <Header />
      </div>
      <div className="homeContent">
        <Section />
      </div>
    </div>
  )
}

export default Home
