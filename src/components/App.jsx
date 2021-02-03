import React from "react";
import "../styles/index.scss";
import sword from '../images/swc-sword.png'
import swordSvg from '../images/sword.svg'

function App() {
  return (
    <>
      <section className="hero"> </section>
        <main>
          <section>
          <h1>Ohh hi React</h1>
          </section>
          <img src={sword} width="250px" alt="sword"/>
          <img src={swordSvg} width="250px" alt="sword"/>
          <ul>
            <li>tupe1</li>
            <li>tupe1</li>
            <li>tupe1</li>
            <li>tupe1</li>
          </ul>
        </main>
    </>
  ); 
}

export default App;
