import React,{useState} from 'react'
import ExeUserDetails from './RegistrationSteps -executive/userDetails/ExeUserDetails';
import ExeConfirm from './RegistrationSteps -executive/Confirm/ExeConfirm';
import './ExecReg.scss'
import NavBar from '../Navbar/NavBar';
import Footer from './HomeContainers/copyright/Footer';

const ExecReg = () => {

    const [activeSteps, setActiveSteps]=useState(0)

    const getSteps = () => {
        return [ 'User details page', 'Confirm page']
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
    <div>
    <NavBar />
        {activeSteps === 0 && (
            <ExeUserDetails values = {multiFormValues} handleChange={handleChange} />
        )}
        {activeSteps === 1 && (
            <ExeConfirm values = {multiFormValues} handleChange={handleChange} />
        )}

        <div className='button-wrapper'>
        <button disabled={activeSteps === 0} className='mr-5' onClick={handlePrevious} >Back</button>
        <button className='ml-5' variant='contained' onClick={handleNext} style={activeSteps == 1 ? {display: 'none'}: {}}>{}{activeSteps === steps.length -1 ? 'submit' : 'next'}</button>
 </div>   
 <Footer />
    </div>
  )
}

export default ExecReg