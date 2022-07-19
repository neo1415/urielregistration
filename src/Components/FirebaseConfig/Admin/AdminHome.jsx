import React from 'react'
import './AdminHome.scss'
import Contact from './Contact/Contact';
import ContactExec from './ContactExec/ContactExec';


const AdminHome = () => {
  return (
    <div className='listContainer'>
        <div className='listTitle'>Latest Transactions</div>
        <Contact />
        <ContactExec />
    </div>
  )
}

export default AdminHome