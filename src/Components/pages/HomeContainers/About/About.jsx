import React from 'react'
import './About.scss'
import { FaCheck } from 'react-icons/fa'
import { motion} from 'framer-motion';

const About = () => {

    const checkStyle={
        color: '#bf2e46',
        fontSize: 19,
        marginTop:4,
        marginRight:7
    }
  return (
    <div id-='about' className='about-container'>
    <motion.div
                           whileInView={{y: [100, 0]}}
                    transition= {{ duration:0.85, ease:'easeOut' }}
     className='about-title'>
        <h3>What is <span>UJRT</span> ?</h3>
    </motion.div>

    <div id="circle-orbit-container">

<div id="middle-orbit">
  <div className="middle-orbit-cirlces"></div>
</div>


</div>
        <motion.div 
        
        whileInView={{y: [100, 0]}}
                    transition= {{ duration:0.85, ease:'easeOut' }}
        className='description'>
            <p>Urielsprout Job Readiness Training (UJRT) helps you become 
            employable by providing intensive pre-employment training. 
            UJRT gives you the opportunity to enhance your work readiness 
            through two different pathways of targeted training. Our training
            will help you understand the expectations of employers in both the 
            recruitment process and as a new employee in the workplace.</p>
        </motion.div>
        

        <div className="benefits">
              <ul>
              <motion.li
                      whileInView={{y: [100, 0]}}
                    transition= {{ duration:0.85, ease:'easeOut' }}
              > <FaCheck style={checkStyle} />  Plan your career and explore options for further education and career development training 
              </motion.li>

              <motion.li
                     whileInView={{y: [100, 0]}}
                    transition= {{ duration:0.85, ease:'easeOut' }}>
                     <FaCheck style={checkStyle} />  Gain expressive confidence and build impressive communication skills </motion.li>

              <motion.li
                      whileInView={{y: [100, 0]}}
                    transition= {{ duration:0.85, ease:'easeOut' }}>
                   <FaCheck style={checkStyle} />  Connect with employers and learn about your local labour market </motion.li>

              <motion.li
                       whileInView={{y: [100, 0]}}
                    transition= {{ duration:0.85, ease:'easeOut' }}>
                   <FaCheck style={checkStyle} />  Understand what employers want and identify various employment opportunities within and outside the country. </motion.li>

              <motion.li
                      whileInView={{y: [100, 0]}}
                    transition= {{ duration:0.85, ease:'easeOut' }}>
                   <FaCheck style={checkStyle} />  Learn job search and interview techniques </motion.li>

              <motion.li
                      whileInView={{y: [100, 0]}}
                    transition= {{ duration:0.85, ease:'easeOut' }}> 
                  <FaCheck style={checkStyle} />  Develop work-related behaviours that help you stand out in the workplace </motion.li>
              </ul>
            </div>
    </div>
  )
}

export default About