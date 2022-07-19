import React from 'react'
import './PriceTable.scss'
import { FaCheck } from 'react-icons/fa'
import { FaPaperPlane } from 'react-icons/fa'
import { FaRocket } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PriceTable = () => {
    const checkStyle={
        color: 'white',
        fontSize: 19,
        fontWeight:800,
        marginTop:4,
        marginRight:7
    }
    const priceStyle={
        color: 'white',
        fontSize: 70,
    }
  return (
    <div id='register' className="container-fluid">
    <div className='price-title'>
        <h3>Our <span>Pricing</span></h3>
    </div>
    <div className="container">
      <div className="row">
      <div className="col-sm-4">
          <div className="card text-center">
            <div className="title">
             <FaRocket style={priceStyle} />
              <h2>Executive</h2>
            </div>
            <div className="price">
              <h4><sup>₦</sup>35,000</h4>
            </div>
            <div className="option">
              <ul>
              <li> <FaCheck style={checkStyle} />  Free fully-drafted Resume/CV  </li>
                        <li> <FaCheck style={checkStyle} />  Five interview schedule </li>
                        <li> <FaCheck style={checkStyle} />  Minimum of Three Months Internship Opportunity </li>
                        <li> <FaCheck style={checkStyle} />  Free Private consultation while preparing for an interview  </li>
                        <li> <FaCheck style={checkStyle} />  Integration into the Urielsprout Job Readiness Network. </li>
                        <li> <FaCheck style={checkStyle} />  Reserved invitation to Job and Career Fairs </li>
              </ul>
            </div>
            <Link to='/Executive-registration' className='link'>Order Now</Link> 
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card text-center">
            <div className="title">
              <FaPaperPlane  style={priceStyle}  />
              <h2>Basic</h2>
            </div>
            <div className="price">
              <h4><sup>₦</sup>12,000</h4>
            </div>
            <div className="option">
              <ul>
                        <li> <FaCheck style={checkStyle} />  Free CV review  </li>
                        <li> <FaCheck style={checkStyle} />  Integration into the Urielsprout Job Readiness Network </li>
                        <li> <FaCheck style={checkStyle} />  Reserved invitation to Job and Career Fairs </li>
                        <li> <FaCheck style={checkStyle} />  Two secured job interview opportunities.  </li>
              </ul>
            </div>
            <Link to='/registration' className='link'>Order Now</Link> 
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default PriceTable