import React from 'react'
import Form from './components/Form.jsx'
import InfoContact from './components/InfoContact.jsx'
import Map from './components/Map.jsx'

const page = () => {
  return (
    <div className='container-contact'>
        <Form />
        <InfoContact />
        <Map />
    </div>
  )
}

export default page