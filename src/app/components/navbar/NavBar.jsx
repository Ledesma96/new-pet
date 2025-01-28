'use client'
import { useWindowSize } from '../helpers/index.js'
import Desktop from './Desktop.jsx'
import Mobile from './Mobile.jsx'

const NavBar = () => {
    const { width } = useWindowSize();
    return (
        <div>
            {width > 768 ? <Desktop /> : <Mobile />}
        </div>
    )
}

export default NavBar