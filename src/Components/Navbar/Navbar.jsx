import React ,{useState} from 'react'
import './navbar.css'
import {GiDetour} from 'react-icons/gi'
import {IoIosCloseCircle} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'


const Navbar = () => {
    const[active ,setActive] = useState('navBar')
    //function to toggle navBar
    const showNav = () =>{
        setActive('navBar activeNavbar')
    }

    return (
        <section className='navbarSection'>
            <header className='header flex'>
                <dir className='logoDiv'>
                    <a href='#' className='logo flex'>
                        <h1><GiDetour className = 'icon'/>Travel Tour (มิจพาทัวล์).</h1>
                    </a>
                </dir>

                <div className="navBar">
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
                    <div className="closeNavbar">
                        <IoIosCloseCircle className='icon'/>
                    </div>
                </div>

                <div className="toggleNavbar">
                    <TbGridDots className='icon'/>
                </div>
            </header>
        </section>
    )
}

export default Navbar