import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { db } from '../../../FirebaseConfig/FirebaseConfig'
import { setDoc,doc } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid';
import { Timestamp } from 'firebase/firestore';
import { PaystackButton } from 'react-paystack';
import './confirm.scss'

const ExeConfirm = ({values}) => {
  const {firstName, lastName, email, gender, birthday, levelOfEducation, PrefferedAreaOfExpertise} = values

    const publicKey = "pk_test_d76efdb1f2965b416262f9d99e8b53ff9e801434"
    const amount = 1
  
    //checkout componentProps
  
    const componentProps = {
      firstName,
      lastName,
      email,
      amount,
      metadata: {
       firstName,
       lastName
      },
      publicKey,
      text: "Pay Now",
      onSuccess: () =>
       handleSubmit(),
      onClose: () => window.location.reload()
      ,
    }

    const handleSubmit= async () =>{
        try{
          await setDoc(doc(db, "Exec-Registration", uuidv4()), {
            firstname: firstName,
            lastname:lastName,
            email:email,
            gender:gender,
            birthday:birthday,
            levelOfEducation:levelOfEducation,
            PrefferedAreaOfExpertise:PrefferedAreaOfExpertise,
            createdAt:Timestamp.now().toDate()
          });
      }catch(err){
        console.log(err)
      } 
      }
  return (
    <div className='confirm'>
     <h4 className='confirmTitle'>Please Confirm your data</h4>
    <ListGroup>
    <ListGroup.Item>First Name </ListGroup.Item>
    <ListGroup.Item className='top'>{firstName} </ListGroup.Item>
        <ListGroup.Item>Second Name </ListGroup.Item>
        <ListGroup.Item className='top'> {lastName} </ListGroup.Item>
        <ListGroup.Item >Email Name  </ListGroup.Item>
        <ListGroup.Item className='top'> {email} </ListGroup.Item>
        <ListGroup.Item> gender</ListGroup.Item>
        <ListGroup.Item className='top'> {gender}</ListGroup.Item>
        <ListGroup.Item>  birthday </ListGroup.Item>
        <ListGroup.Item className='top'>  {birthday}</ListGroup.Item>
        <ListGroup.Item> Level Of Education </ListGroup.Item>
        <ListGroup.Item className='top'> {levelOfEducation}</ListGroup.Item>
        <ListGroup.Item>  Preffered Area Of Expertise </ListGroup.Item>
        <ListGroup.Item className='top'> {PrefferedAreaOfExpertise}</ListGroup.Item>
        <ListGroup.Item>  Price : ₦ 35,000</ListGroup.Item>
    </ListGroup>
    <div className='buttonWrapper'>
   <PaystackButton {...componentProps} />
    </div>
    </div>
  )
}

export default ExeConfirm