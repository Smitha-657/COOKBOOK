import React from 'react'
import { IoFastFoodOutline, IoMailOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import '../styles/NewsLetter.css'

const NewsLetter = () => {

  const [subscribe, setSubscribe] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const handleSubscribe = () => {
    setEmail('');
    setSubscribe(true);
    setTimeout(() => {
      setSubscribe(false);
    }, 5000);
  }

  return (
    <div className='newsletter-container'>

      <div className="newsletter-body">
        <div className="newsletter-text">
            <IoFastFoodOutline className='food-icon' />
            <span>
              <h4>Hungry for more? Unlock exclusive Tasty Bites recipes, cooking tips, and weekly inspiration straight to your inbox.</h4>
              <p>Get weekly meal inspiration, expert cooking tips, and delicious ideas—subscribe now and level up your culinary skills.</p>
            </span>
        </div>
        <div className="newsletter-input-body">
            <div className="newsletter-input">
              <span>
                  <IoMailOutline className='mail-icon' />
                  <input type="text" placeholder='Your email address' onChange={(e)=> setEmail(e.target.value)} value={email} />
              </span>
              <button onClick={handleSubscribe}>Subscribe</button>
            </div>
        {subscribe && 
            <p>Thanks for subscribing!!</p>
        }
            <p>
                <FaRegCheckCircle className='tick-icon' />
                Purely delicious, zero spam—subscribe for weekly foodie goodness!
            </p>
        </div>
      </div>

    </div>
  )
}

export default NewsLetter