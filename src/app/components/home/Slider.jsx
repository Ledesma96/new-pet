'use client'
import { useEffect } from 'react';

const Slider = () => {
  useEffect(() => {
    // Verifica si estamos en el cliente antes de importar y usar Bootstrap
    if (typeof window !== 'undefined') {
      // Importa Bootstrap solo si estamos en el cliente
      import('bootstrap/dist/js/bootstrap.bundle.min.js')
        .then(() => {
          // Opcional: inicializa cualquier componente de Bootstrap aquí
        })
        .catch((error) => console.error('Error loading Bootstrap', error));
    }
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src="/pet-shop-background-dog-accessories-260nw-2264755145.webp" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="/pet-store-background-funny-happy-260nw-2268208127.webp" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <img  src="/pet-supermarket-background-dog-shopping-260nw-2272393221.webp" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;