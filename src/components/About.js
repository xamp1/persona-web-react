import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import './Style.css'

const About = () => {
  return (
    <>
    <Navbar/>
    <section id="main">
        <div className="container">
          <article id="main-col">
            <h1 className="page-title">About Me</h1>
            <p>I am a student at University of Pancasila. Currently, I am at my 5th semester this year. And im looking forward to my journey as a Front-end Developer</p>
            <p>I am currently learning about Front-end Web Development at PT. Impactbyte Teknologi Edukasi (Skilvul) as a Participant of Kampus Merdeka event. And i've been learning much from this event, such as Javascript, CSS, HTML and much more, this web is created as an assignment from Skilvul. Thus i created this Personal Website of mine</p>
          </article>
          <aside id="sidebar">
            <div className="dark">
              <h3>What I Do?</h3>
              <p>Currently i am learning about HTML, CSS, Javascript. Sometimes, well not really "sometimes" but from times to times i like to built some web to advance my knowledge about Front-End Development, and i like doing it, at least for now heheh</p>
            </div>
          </aside>
        </div>
      </section>
    <Footer/>
    </>
  )
}

export default About