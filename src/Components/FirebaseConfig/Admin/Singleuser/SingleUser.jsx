import React,{useEffect, useState} from 'react'
import './SingleUser.scss'
import { collection, getDocs, deleteDoc, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from '../../FirebaseConfig';
import { useParams } from 'react-router-dom';
const SingleUser = () => {

    const [data, setData] = useState([]);

    const {id} = useParams();

    useEffect(
        ()=>{
            const docRef = doc(db, 'users', id);
            onSnapshot(docRef, (snapshot) =>{
                setData({...snapshot.data(), id:snapshot.id});
            })
        }
    )
      console.log(data)

  return (
    <div>{data.email}
        <a href={data.file} download>download</a>
        <p>{data.firstname}</p>
        <p>{data.lastname}</p>
    </div>
    
  )
}

export default SingleUser