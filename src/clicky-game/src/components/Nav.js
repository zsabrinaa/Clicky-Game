import React from "react";



function NavBar(props) {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">High Score:{props.highScore} <br></br>Your Score:{props.score}</span>
      </nav>
    </div>

  )
}
export default NavBar;