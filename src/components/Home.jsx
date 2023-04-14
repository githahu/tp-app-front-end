import { Link } from 'react-router-dom'
import React from 'react'
import image from '../images/checkresults.svg'

function Home() {
  return (
    <div className='home-container'>
        <div className="home-text">
            <h2>Transparent Results</h2>
            <p>This simple app is designed to communicate clear timely and transparent results to different users: parents, students as well as teachers. 
                Feel free to interact with its easy and appealing interface for better and satisfying results.
It has 3 extra links that you can access easily through the above links.            </p>
            <li>Students</li>
            <li>Teachers</li>
            <li>results</li>
            <Link to="/results">
            <button>View Results</button>
            </Link>       
        </div>
        <div className="home-image">
            <img src={image} alt="check result" />
        </div>
    </div>
  )
}

export default Home