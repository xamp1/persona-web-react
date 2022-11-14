import React from 'react'
import './Style.css'

export const Box = () => {
  return (
    <>
    <section id="boxes">
        <div className="container">
          <div className="box">
            {/* <img src="./img/html1.png" /> */}
            <h3>HTML5 Markup</h3>
            <p>HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.</p>
          </div>
          <div className="box">
            {/* <img src="./img/css2.png" /> */}
            <h3>CSS3 Styling</h3>
            <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML)</p>
          </div>
          <div className="box">
            {/* <img src="./img/brush3.png" /> */}
            <h3>Graphic Designing</h3>
            <p>Graphic design is a profession, applied art and academic discipline whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives.</p>
            <br />
            <br />
            <br />
          </div>
        </div>
      </section>
    </>
  )
}

export default Box;