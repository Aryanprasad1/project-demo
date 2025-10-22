import React from 'react'
import "/public/Static/Css/App.css"
function Components1() {
  return (
    <>
    <nav className='nav1' >
        <div><img src='/public/Static/Images/brand_logo.png' alt='logo'></img></div>
        
        <ul className="list">
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li> 
        </ul>
        <button>Log In</button>
      </nav>
    </>
  )
}

export default Components1
