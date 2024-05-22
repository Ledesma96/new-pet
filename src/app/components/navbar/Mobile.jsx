"use client";
import Link from "next/link";
import React, { useState } from "react";

const Mobile = () => {
  const [open, setOpen] = useState(false);
  const [openPets, setOpenPets] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickPets = () => {
    setOpenPets(!openPets);
  };

  const enterOption = () => {
    setOpen(!open);
    setOpenPets(false);
  }

  return (
    <nav className="container-navbarMobile">
      {open ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
          onClick={handleClick}
          className='svg-on'
        >
          <path
            fillRule="evenodd"
            d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
          onClick={handleClick}
          className='svg-off'
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      )}
      <div className={`${open ? "container-navbarMobile_div-on" : "container-navbarMobile_div-off"} container-navbarMobile_div`}>
        <Link onClick={enterOption} className="container-navbarMobile_div_link" href='/'>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
          </svg>
          <span className="container-navbarMobile_div_span">INICIO</span>
        </Link>
        <div className="container-navbarMobile_div_pets" onClick={handleClickPets}>
          <span className="material-symbols-outlined">pets</span>
          <p className="container-navbarMobile_div_pets_p">MASCOTAS</p>
          {openPets ? 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z"/>
            </svg> 
          : 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
            </svg>
          }
        </div>
        <div className={`container-navbarMobile_div_categories ${openPets ? 'categories-on' : 'categories-off'}`}>
          <Link onClick={enterOption} className="container-navbarMobile_div_categories_link" href='/products/dogs'>
            <img className="container-navbarMobile_div_categories_link_img" src="/icon-menu-perros.png" alt="icono perro"/>
            <span className="container-navbarMobile_div_categories_link_span">PERROS</span>
          </Link>
          <Link onClick={enterOption} className="container-navbarMobile_div_categories_link" href='/products/cats'>
            <img className="container-navbarMobile_div_categories_link_img" src="/icon-menu-gatos.png" alt="icono gato"/>
            <span className="container-navbarMobile_div_categories_link_span">GATOS</span>
          </Link>
          <Link onClick={enterOption} className="container-navbarMobile_div_categories_link" href='/products/birds'>
            <img className="container-navbarMobile_div_categories_link_img" src="/icon-menu-aves.png" alt="icono aves"/>
            <span className="container-navbarMobile_div_categories_link_span">AVES</span>
          </Link>
          <Link onClick={enterOption} className="container-navbarMobile_div_categories_link" href='/products/fishes'>
            <img className="container-navbarMobile_div_categories_link_img" src="/icon-menu-peces.png" alt="icono peces"/>
            <span className="container-navbarMobile_div_categories_link_span">PECES</span>
          </Link>
          <Link onClick={enterOption} className="container-navbarMobile_div_categories_link" href='/products/others'>
            <img className="container-navbarMobile_div_categories_link_img" src="/icon-menu-roedores.png" alt="icono otros"/>
            <span className="container-navbarMobile_div_categories_link_span">OTROS</span>
          </Link>
        </div>
        <Link onClick={enterOption} className="container-navbarMobile_div_link" href='/contact'>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
          </svg>
          <span className="container-navbarMobile_div_span">CONTACTO</span>
        </Link>
        <Link onClick={enterOption} className="container-navbarMobile_div_link" href='/faqs'>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM5.495 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927"/>
          </svg>
          <span className="container-navbarMobile_div_span">FAQ&apos;S</span>
        </Link>
      </div>
      <img className="container-navbarMobile_logo" src="/184866534_262409168649318_644897417964500282_n.png" alt="icono local"/>
    </nav>
  );
};

export default Mobile;
