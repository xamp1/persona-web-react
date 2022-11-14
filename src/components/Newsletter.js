import React from 'react'
import './Style.css'

const Newsletter = () => {
  return (
    <>
    <section id="newsletter">
          <div className="container">
            <h1>Subscribe</h1>
            <form>
              <input type="email" placeholder="Enter Email.." />
              <button type="submit" className="button_1">Subscribe</button>
            </form>
          </div>
        </section>
    </>
  )
}

export default Newsletter