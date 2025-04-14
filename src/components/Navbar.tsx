import { NavLink } from 'react-router-dom'
import Github from '../assets/Github'
import { Tooltip } from 'react-tooltip';

// import { IoSunny } from "react-icons/io5"
// import { FaRegMoon } from "react-icons/fa"

const Navbar = () => {

    return (
        <>
            <nav className="select-none">
                <header className="text-black md:text-gray-400 bg-transparent body-font text-2xl">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <NavLink data-tooltip-id="Home" className="flex title-font font-medium items-center mb-4 md:mb-0" to="/">
                            <span className="logo md:hover:text-black ml-3">
                                Bro code <span className="logo-thumb">💪</span>
                            </span>
                        </NavLink>
                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <NavLink data-tooltip-id="Home" className="mr-5 text-xl hover:text-black" to="/">Home</NavLink>
                            <NavLink data-tooltip-id="Password" className="mr-5 text-xl hover:text-black" to="/passwords">Your Passwords</NavLink>
                            <NavLink data-tooltip-id="About" className="mr-5 text-xl hover:text-black" to="/about">About</NavLink>
                            <NavLink data-tooltip-id="Contact" className="mr-5 text-xl hover:text-black" to="/contact">Contact</NavLink>
                            <a data-tooltip-id="add-tooltip" href="https://github.com/karzkc" target='_blank'><Github /></a>
                            <Tooltip arrowColor="#08a88a" id="add-tooltip" place="top" content="My Github" className="tooltip" />
                            <Tooltip arrowColor="#08a88a" id="Home" place="top" content="Home Page" className="tooltip" />
                            <Tooltip arrowColor="#08a88a" id="Password" place="top" content="Your all Passwords" className="tooltip" />
                            <Tooltip arrowColor="#08a88a" id="About" place="top" content="About Page" className="tooltip" />
                            <Tooltip arrowColor="#08a88a" id="Contact" place="top" content="Contact Page" className="tooltip" />
                        </nav>
                    </div>
                </header>
            </nav>
        </>
    )
}

export default Navbar
