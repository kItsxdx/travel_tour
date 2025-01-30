import React from 'react'
import './footer.scss'
import video1 from '../../Assets/video2.mp4'
import {FiSend} from 'react-icons/fi';
import {FaEarthAmericas} from 'react-icons/fa6';
import {FaAngleRight} from 'react-icons/fa'

import {FiFacebook} from 'react-icons/fi'
import {FaInstagram} from 'react-icons/fa'
import {RiTiktokLine} from 'react-icons/ri'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {TbBrandAirbnb} from 'react-icons/tb'

const Footer = () => {
    return (
        <section className='footer'>
            <div className="videoDiv">
                <video src={video1} loop autoPlay muted type="video/mp4" ></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>ติดต่อเรา</small>
                        <h3>เที่ยวกับเราสิ เราคือมิจ</h3>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" placeholder='ที่อยู่อีเมล์ของท่าน' />
                        <button className="btn flex" type='sumit'>
                                ส่ง<FiSend className='icon'/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <FaEarthAmericas className='icon'/> Travel Tour (มิจพาทัวล์).
                            </a>
                        </div>

                        <div className="footerParagraph">
                        It is recommended that you include a clear CTA in your website footer. 
                        Now it's time for you to take action. 
                        Don't let this moment pass by, and invite users to further exploration, like in the example below. 
                        CTAs might well increase conversion rates, 
                        by helping undecided users to make up their mind, 
                        in favour of a product/piece of information/service, etc.
                        </div>

                        <div className="footerSocials">
                            <FiFacebook className="icon"/>
                            <FaInstagram className="icon"/>
                            <RiTiktokLine className="icon"/>
                            <FaSquareXTwitter className='icon'/>
                            <TbBrandAirbnb className='icon'/>

                        </div>
                    </div>


                    <div className="footerLinks grid">
                    {/* กลุ่มท่ี 1 */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                เจ้าหน้าที่ของเราชาวมิจ
                            </span>

                            <li className="footerList flex">
                                <FaAngleRight className='icon'/>
                                การให้บริการ
                            </li>

                            <li className="footerList flex">
                                <FaAngleRight className='icon'/>
                                ประกันภัย
                            </li>

                            <li className="footerList flex">
                                <FaAngleRight className='icon'/>
                                หน่วยงานของเรา
                            </li>

                            <li className="footerList flex">
                                <FaAngleRight className='icon'/>
                                การท่องเที่ยว
                            </li>

                            <li className="footerList flex">
                                <FaAngleRight className='icon'/>
                                การชำระเงิน
                            </li>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer