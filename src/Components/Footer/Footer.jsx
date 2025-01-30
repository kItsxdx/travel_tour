import react from 'react'
import './footer.css'
import video1 from '../../Assets/video1.mp4'
import {FiSend} from 'react-icons/fi';

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
                        <h3>เที่ยวกับเรา</h3>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" placeholder='ที่อยู่อีเมล์ของท่าน' />
                        <button className="btn flex" type='sumit'>
                                ส่ง <FiSend className='icon'/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer