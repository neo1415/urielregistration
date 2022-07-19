import React from 'react'
import './user.scss'

const UserDetails = ({values, handleChange}) => {
    console.log(values,handleChange)
  return (
    <div className='userform'>
        <div className='form'>
            <form>
                <h4 className='formTitle'>Enter Your Details</h4>

                <label htmlFor="first-name">First Name</label>
                <input 
                type='text'
                placeholder='first Name'
                defaultValue={values.firstName}
                onChange={handleChange('firstName')}
                ></input>

                <label htmlFor="Last-name">last Name</label>
                <input 
                type='text'
                placeholder='last Name'
                defaultValue={values.lastName}
                onChange={handleChange('lastName')}
                ></input>

                 <label htmlFor="email">Email</label>
                <input 
                type='email'
                placeholder='email'
                defaultValue={values.email}
                onChange={handleChange('email')}
                ></input>
                <label htmlFor="gender">Gender</label>
            <select id="cars" name="gender" size="1"
                defaultValue={values.gender}
                onChange={handleChange('gender')}>
                <option  className='gender' value="Gender"></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select> 
            <label htmlFor="birthday">Date of Birth</label>
            <input type="date" id="birthday" name="birthday" 
            defaultValue={values.birthday}
            onChange={handleChange('birthday')}
            />
            <label htmlFor="loe">Level of Education</label>
            <select id="LOE" name="levelOfEducation" size="1"
                defaultValue={values.levelOfEducation}
                onChange={handleChange('levelOfEducation')}>
                  <option className='gender' value='choose'></option>
                <option className='gender' value="Undergraduate">Undergraduate</option>
                <option value="BSC">BSC</option>
                <option value="PHD">PHD</option>
            </select> 
            <label htmlFor="aoe">Preffered Area of Expertise</label>
            <select id="AOE" name="Preffered Area of Expertise" size="1"
                defaultValue={values.PrefferedAreaOfExpertise}
                onChange={handleChange('PrefferedAreaOfExpertise')}>
                <option className='gender' value="Choose"></option>
                <option value="Communications/Marketing">Communications/Marketing</option>
                <option value=">Health<">Health</option>
                <option value="Financial Services">Financial Services</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Business Analysis">Business Analysis</option>
                <option value="Administrative Assistant">Administrative Assistant</option>
                <option value="Sales">Sales</option>
                <option value="Customer Service Representative">Customer Service Representative</option>
            </select> 
            </form>
        </div>
    </div>
  )
}

export default UserDetails