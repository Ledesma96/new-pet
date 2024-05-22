"use client";
import React, { useEffect, useState } from "react";

const Filters = ({ setSelectType, selectType, setSelectBrand, selectBrand, types, brand }) => {
  const [openFilters, setOpenFilters] = useState(false);

  const [checkedStateType, setCheckedStateType] = useState(
    new Array(types.length).fill(false)
  )
  const [checkedStateBrand, setCheckedStateBrand] = useState(
    new Array(brand.length).fill(false)
  )

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () =>{
            setWindowWidth(window.innerWidth)
        } 

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
        
    }, [])

  const handleClick = () => {
    setOpenFilters(!openFilters);
  };

  //control de check box y array de tipos (type)
  const handleSelectType = (e, potition) => {
    const changeState = checkedStateType.map((item, index) => {
        index === potition ? !item : item
    })
    setCheckedStateType(changeState)

    if (selectType.length > 0) {
        const findType = selectType.find(type => type === e.target.value);
        if (!findType) {
            setSelectType([...selectType, e.target.value]);
        } else {
            setSelectType(selectType.filter(type => type !== e.target.value));
        }
    } else {
        setSelectType([e.target.value]);
    }
  };

  //control de check box y array de marcas (brand)
  const handleSelectBrand = (e, potition) => {
    const changeState = checkedStateBrand.map((item, index) => {
      index === potition?!item : item
    })
    setCheckedStateBrand(changeState)

    if (selectBrand.length > 0) {
      const findBrand = selectBrand.find(brand => brand === e.target.value)
      if(!findBrand){
        setSelectBrand([...selectBrand, e.target.value])
      } else {
        setSelectBrand(selectBrand.filter(brand => brand != e.target.value))
      }
    } else {
      setSelectBrand([e.target.value])
    }
  }

  const clearFilters = () => {
    setSelectBrand('')
    setSelectType('')
    setCheckedStateBrand(checkedStateBrand.map(item => item = false))
    setCheckedStateType(checkedStateType.map(item => item = false))
    
  }

  return (
    <div className="container-filters">
      <div onClick={handleClick} className="container-filters_div-head">
        <h1>Filters</h1>
        <div className="container-filters_div-head_icon">
          {windowWidth < 768 && (openFilters ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-chevron-compact-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-chevron-compact-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
              />
            </svg>
          ))}
        </div>
      </div>
      <div className={`${windowWidth < 768 &&  (openFilters ? 'filters-on' : 'filters-off')} container-filters_div-body`}>
        <h3 className="container-filters_div-body_h3">Tipo</h3>
        <section className="container-filters_div-body_section">
            {types.map((type, index) => (
                <div key={index} className="container-filters_div-body_section_div">
                <input
                  className="container-filters_div-body_section_div_input"
                  onClick={(e) => handleSelectType(e, index)}
                  checked={checkedStateType[index]}
                  value={`${type}`}
                  type="checkbox"
                  name="type"
                />
                <label className="container-filters_div-body_section_div_label" htmlFor="brand">{type}</label>
              </div>
            ))}
        </section>
        <h3 className="container-filters_div-body_h3">Marca</h3>
        <section className="container-filters_div-body_section">
            {brand.map((brand, index) => (
                <div key={index} className="container-filters_div-body_section_div">
                <input
                  className="container-filters_div-body_section_div_input"
                  onClick={(e) => handleSelectBrand(e, index)}
                  checked={checkedStateBrand[index]}
                  value={`${brand}`}
                  type="checkbox"
                  name="brand"
                />
                <label className="container-filters_div-body_section_div_label" htmlFor="brand">{brand}</label>
              </div>
            ))}
        </section>
        <button onClick={clearFilters} className="container-filters_btn">Limpiar</button>
      </div>
    </div>
  );
};

export default Filters;
