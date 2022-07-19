import React,{useEffect} from 'react'
import { ListGroup } from 'react-bootstrap'
import { db } from '../../../FirebaseConfig/FirebaseConfig'
import { setDoc,doc, Timestamp } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid';
import { PaystackButton } from 'react-paystack';
import './confirm.scss'

const Confirm = ({values}) => {


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
          await setDoc(doc(db, "registration", uuidv4()), {
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
        <ListGroup.Item>First Name : {firstName} </ListGroup.Item>
        <ListGroup.Item>Second Name : {lastName} </ListGroup.Item>
        <ListGroup.Item>Email Name : {email} </ListGroup.Item>
        <ListGroup.Item> gender: {gender}</ListGroup.Item>
        <ListGroup.Item>  birthday : {birthday}</ListGroup.Item>
        <ListGroup.Item> Level Of Education : {levelOfEducation}</ListGroup.Item>
        <ListGroup.Item>  Preffered Area Of Expertise : {PrefferedAreaOfExpertise}</ListGroup.Item>
        <ListGroup.Item>  Price : ₦ 12,000</ListGroup.Item>
    </ListGroup>
    <div className='buttonWrapper'>
   <PaystackButton {...componentProps} />
    </div>
    </div>
  )
}

export default Confirm