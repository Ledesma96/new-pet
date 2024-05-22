import Link from "next/link";
import Search from "./Search";

const Desktop = () => {

  return (
    <nav className="navbar-desktop">
      <img className="navbar-desktop_img" src="/184866534_262409168649318_644897417964500282_n.png" alt="log"/>
      <div className="container-navigation">
        <div className="container-navigation_div">
          <Link href='/' >INICIO</Link>
        </div>
        <div className="container-navigation_div">
          <Link href='/products/dogs' >PERROS</Link>
        </div>
        <div className="container-navigation_div">
          <Link href='/products/cats' >GATOS</Link>
        </div>
        <div className="container-navigation_div">
          <Link href='/products/birds' >AVES</Link>
        </div>
        <div className="container-navigation_div">
          <Link href='/products/birds' >PECES</Link>
        </div>
        <div className="container-navigation_div">
          <Link href='/products/others' >OTROS</Link>
        </div>
        <div className="container-navigation_div">
          <Link href='/contact' >CONTACTO</Link>
        </div>
        <div className="container-navigation_div">
          <Link href='/faqs' >FAQ&apos;S</Link>
        </div>
      </div>
    </nav>
  )
}
export default Desktop