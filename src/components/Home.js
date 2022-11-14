import React from 'react'
import './Style.css'

function Nama(props){
    return <p>Hi there! I'm {props.saya}, I'm a Front-End Web Developer</p>;
}

export const Home = () => {
  return (
    <>
    <section id="showcase">
          <div className="container">
            <h1>My First Website</h1>
            <Nama saya="Ath Thaariq Adz Zyad"/>
          </div>
        </section>
    </>
  )
}

export default Home;