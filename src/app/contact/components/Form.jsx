'use client'
import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    console.log(typeof(phone))

    
  return (
    <main className='container-contact_main'>
        <div className='container-contact_main_div'>
            <h1>CONTACTO</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit sed condimentum accumsan enim potenti, ornare aliquam malesuada mus sagittis. </p>
        </div>
        <form className='container-contact_main_form'>
            <div className='container-contact_main_form_div'>
                <input className={`${name != '' && 'input-color'}`} onChange={(e) => setName(e.target.value )} type='text'></input>
                <label className={`${name != '' && 'label-up'}`}>Nombre</label>
            </div>
            <div className='container-contact_main_form_div'>
                <input className={`${phone != '' && 'input-color'}`} onChange={(e) => setPhone(e.target.value)} type='number'></input>
                <label className={`${phone != '' && 'label-up'}`}>Teléfono</label>
            </div>
            <div className='container-contact_main_form_div'>
                <input className={`${email != '' && 'input-color'}`} onChange={(e) => setEmail(e.target.value)} type='email'></input>
                <label className={`${email != '' && 'label-up'}`}>Email</label>
            </div>
            <div className='container-contact_main_form_div'>
                <textarea className={`${message != '' && 'input-color'}`} onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                <label>Mensaje</label>
            </div>
            <button className='container-contact_main_form_btn'>ENVIAR</button>
        </form>
    </main>
  )
}

export default Form