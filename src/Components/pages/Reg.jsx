import React,{useState} from 'react'
import Confirm from './RegistrationSteps/Confirm/Confirm'
import UserDetails from './RegistrationSteps/userDetails/UserDetails'
import './reg.scss'
import Footer from './HomeContainers/copyright/Footer';
import NavBar from '../Navbar/NavBar';

const Reg = () => {

    const [activeSteps, setActiveSteps]=useState(0)

    const getSteps = () => {
        return ['User details', 'Confirm']
    }

    const steps = getSteps()

    const [multiFormValues, setMultiformValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender:"",
        birthday:"",
        levelOfEducation:"",
        PrefferedAreaOfExpertise:""
    })

    const handleNext = () => {
        setActiveSteps((nextStep) => nextStep + 1)
    }

    const handlePrevious = () => {
        setActiveSteps((PreviousStep) => PreviousStep - 1)
    }

    const handleChange = (input) =>(e) => {
        setMultiformValues({...multiFormValues, [input]: e.target.value})
    }

  return (
    <div className='reg'>
    <NavBar />
        {activeSteps === 0 && (
            <UserDetails values = {multiFormValues} handleChange={handleChange} />
        )}
        {activeSteps === 1 && (
            <Confirm values = {multiFormValues} handleChange={handleChange} />
        )}
<div className='button-wrapper'>
        <button disabled={activeSteps === 0} className='mr-5' onClick={handlePrevious} >Back</button>
        <button className='ml-5' variant='contained' onClick={handleNext} style={activeSteps === 1 ? {display: 'none'}: {}}>{}{activeSteps === steps.length -1 ? 'submit' : 'next'}</button>
 </div>   
 <Footer />
    </div>
  )
}

export default Reg