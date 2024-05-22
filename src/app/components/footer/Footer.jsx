import Link from 'next/link'
import React from 'react'
import Suscription from './form/Suscription'

const Footer = () => {
  return (
    <footer className='footer'>
        <address className='footer_address'>
            <h6 className='footer_h6'>Contactanos</h6>
            <div className='footer_address_div'>
                <p className='footer_address_div_p'>Direccion:</p>
                <p className='footer_address_div_p'>Av. Sta. Fe 1000 - CABA</p>
            </div>
            <div className='footer_address_div'>
                <p className='footer_address_div_p'>Email:</p>
                <Link className='footer_address_div_link' href=''>Email@gmail.com</Link>
            </div>
            <div className='footer_address_div'>
                <p className='footer_address_div_p'>Telefono:</p>
                <Link className='footer_address_div_link' href=''>+541155555555</Link>
            </div>
        </address>
        <nav className='footer_nav'>
            <h6 className='footer_h6'>Navegación</h6>
            <ul className='footer_nav_ul'>
                <li className='footer_nav_ul_li'>
                    <svg color='#36566B' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <Link className='footer_nav_ul_li_link' href='/'>INICIO</Link>
                </li>
                <li className='footer_nav_ul_li'>
                    <svg color='#36566B' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <Link className='footer_nav_ul_li_link' href='/products'>PRODUCTOS</Link>
                </li>
                <li className='footer_nav_ul_li'>
                    <svg color='#36566B' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <Link className='footer_nav_ul_li_link' href='/contact'>CONTACTO</Link>
                </li>
                <li className='footer_nav_ul_li'>
                    <svg color='#36566B' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <Link className='footer_nav_ul_li_link' href='/faqs'>FAQ&apos;S</Link>
                </li>
            </ul>
        </nav>
        <section className='footer_section'>
            <h6 className='footer_h6'>Social</h6>
            <ul className='footer_section_ul'>
                <li className='footer_section_ul_li'>
                    <Link className='footer_section_ul_li_link' href='https://www.facebook.com/'>
                        <svg className='footer_section_ul_li_link_svg facebook_svg' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                        </svg>
                        <p>Facebook</p>
                    </Link>
                </li>
                <li className='footer_section_ul_li'>
                    <Link className='footer_section_ul_li_link ' href='https://www.instagram.com/'>
                        <svg className='footer_section_ul_li_link_svg instagram_svg' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                        </svg>
                        <p>Instagram</p>
                    </Link>
                </li>
                <li className='footer_section_ul_li'>
                    <Link className='footer_section_ul_li_link' href='https://www.twitter.com/'>
                        <svg className='footer_section_ul_li_link_svg tiktok_svg' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                        </svg>
                        <p>Tiktok</p>
                    </Link>
                </li>
            </ul>
        </section>
        <Suscription/>
        <p className='footer_p'>© 2021  |  Todos los derechos reservados</p>
    </footer>
  )
}

export default Footer