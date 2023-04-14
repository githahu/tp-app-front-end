import { Link } from 'react-router-dom'
import React from 'react'
import image from '../images/checkresults.svg'

function Home() {
  return (
    <div className='home-container'>
        <div className="home-text">
            <h2>Transparent Results</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos autem a mollitia. Veritatis rem, aspernatur voluptas optio vero iusto dolore. Eaque quaerat adipisci laudantium minima, nobis omnis architecto veniam.</p>
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