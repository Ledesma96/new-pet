import React from 'react'

const InfoContact = () => {
  return (
    <section className='container-contact_section'>
        <h2>Nuestro contacto</h2>
        <div className='container-contact_section-wrap'>
            <div className='container-contact_section_div'>
                <div class="container-contact_section_div_item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    </svg>
                    <div class="rotating-container">
                        <span></span>
                    </div>
                </div>
                <div className='container-contact_section_info'>
                    <h3>Teléfono:</h3>
                    <p>1164254875</p>
                </div>
            </div>
            <div className='container-contact_section_div'>
                <div class="container-contact_section_div_item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                    </svg>
                    <div class="rotating-container">
                        <span></span>
                    </div>
                </div>
                <div className='container-contact_section_info'>
                    <h3>Ubicación:</h3>
                    <p>Av. Sta. fe 1000 - CABA</p>
                </div>
            </div>
            <div className='container-contact_section_div'>
                <div class="container-contact_section_div_item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z"/>
                        <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686"/>
                    </svg>
                    <div class="rotating-container">
                        <span></span>
                    </div>
                </div>
                <div className='container-contact_section_info'>
                    <h3>Email:</h3>
                    <p>Email@gmail.com</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default InfoContact