import React ,{useState} from 'react'
import './navbar.scss'
import {IoIosCloseCircle} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'
import {FaEarthAmericas} from 'react-icons/fa6';



const Navbar = () => {
    const[active, setActive] = useState('navBar')

    //function to toggle navBar
    const showNav = () =>{
        setActive('navBar activeNavbar')
    }

    //function to remove navBar
    const removeNavbar = () =>{
    setActive('navBar')
    }   

    return (
        <section className='navbarSection'>
            <header className='header flex'>

                <dir className='logoDiv'>
                    <a href='#' className='logo flex'>
                        <h1>
                            <FaEarthAmericas className = 'icon'/>Travel Tour (มิจพาทัวล์).
                        </h1>
                    </a>
                </dir>

                <div className={active}>
                    <ul className="navlists flex">
                        <li className="navItem">
                            <a href='#' className='navLink'>หน้าหลัก</a>
                        </li>

                        <li className="navItem">
                            <a href='#' className='navLink'>รายการเที่ยว</a>
                        </li>

                        <li className="navItem">
                            <a href='#' className='navLink'>ร้านค้าของมิจ</a>
                        </li>

                        <li className="navItem">
                            <a href='#' className='navLink'>ข้อมูลเกี่ยวกับมิจ</a>
                        </li>

                        <li className="navItem">
                            <a href='#' className='navLink'>ติดต่อมิจ</a>
                        </li>

                        <button className='btn'>
                            <a href='#'>!!!จองด่วน!!!</a>
                        </button>

                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <IoIosCloseCircle className='icon'/>
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className='icon'/>
                </div>

            </header>
        </section>
    )
}

export default Navbar