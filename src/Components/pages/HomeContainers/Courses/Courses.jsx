import React from 'react'
import './Courses.scss'
import { FaCheckCircle } from 'react-icons/fa'
import { images } from '../../../../Constants'
import { motion } from 'framer-motion';

const Courses = () => {

    const checkStyle={
        color: '#bf2e46',
        fontSize: 19,
        marginTop:4,
        marginRight:7
    }
  return (
    <div id='courses' className='courses-container'>
    
        <div className='coursesTitle'>
            <h3 className='course-title'>Our <span>Pathways</span></h3>
            <p>Depending on your preference, we offer two types of UJRT Pathways, 
            each designed to build upon differing skill sets, both which will help
            improve your chances at getting a job.You can do one or both of the courses. </p>
        </div>
      
        <div className='course-Container'>
            <div className='basic'>
                <motion.div
                whileInView={{scale:[0,1]}}
                transition={{duration:1,ease:'easeInOut'}}
            
                 className='image'>
                    <img src={images.basic} alt='basic ' />
                </motion.div>
                <motion.div 
                       whileInView={{x: [300, 0]}}
                    transition= {{ duration:0.85, ease:'easeOut' }}
                className='course-detail'>
                
                    <div className='course-title'>
                    <h4>The First Pathway<span>(Basic)</span> is <span>6 Hours</span> of <span>virtual training</span> over <span>3 Days</span></h4>
                    </div>
                    <div className='course-description'>
                    <p>The BASIC course will focus on workplace skills and knowledge, 
                    problem solving and communication abilities to meet the expectations of employers. </p>
                    </div>
                    <div className='course-list'>
                    <ul>
                        <li> <FaCheckCircle style={checkStyle} />  Workplace Skills and Knowledge  </li>
                        <li> <FaCheckCircle style={checkStyle} />  How to build a Winning Resume/CV </li>
                        <li> <FaCheckCircle style={checkStyle} />  Interview Skills and Impression Management </li>
                    </ul>
                    </div>
                </motion.div>
            </div>
   
            <div className='executive'>
                <motion.div
                 whileInView={{scale:[0,1]}}
            transition={{duration:1,ease:'easeInOut'}}
                  className='image'>
                    <img src={images.Hero3} alt='executive' />
                </motion.div>
                <motion.div 
                 whileInView={{x: [-300, 0]}}
                    transition= {{ duration:0.85, ease:'easeOut' }}
                className='course-detail'>
                    <div className='course-title'>
                   <h4>The Second Pathway <span>(Executive)</span> is <span>10 hours</span> of <span>virtual training</span> over <span>5 days</span></h4> 
                    </div>
                    <div className='course-description'>
                   <p> The Executive course will help you develop (build) your resume and improve interview techniques (providing free consultation),
                    focusing on job preparation and job-hunting skills. This course will also give you the first-hand opportunity to attend Five (5) 
                    secured job interviews with minimum of 3-Months Internship Opportunities. These experiences will further expose you to the world of work. </p>
                    </div>
                    <div className='course-list'>
                    <ul>
                        <li> <FaCheckCircle style={checkStyle} />  Workplace Skills and knowledge </li>
                        <li> <FaCheckCircle style={checkStyle} />  How to build a Winning Resume/CV </li>
                        <li> <FaCheckCircle style={checkStyle} />  Interview Skills and Impression Management </li>
                        <li> <FaCheckCircle style={checkStyle} />  Self Awareness and Developing Ownership Mindset </li>
                        <li> <FaCheckCircle style={checkStyle} />  Personal Effectiveness  </li>
                    </ul>
                    </div>
                </motion.div>
            </div>
        </div>

    </div>
  )
}

export default Courses