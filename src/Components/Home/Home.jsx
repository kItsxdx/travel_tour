import React from 'react'
import './home.scss'
import video from '../../Assets/video2.mp4';
import {TbLocationDollar} from 'react-icons/tb'


const Home = () => {
    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type ="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span className="smallText">
                        เที่ยวกับแมวของคุณ
                    </span>

                    <h1 className="homeTitle">
                        เราคือมิจที่จะพานำเที่ยวไม่ลอยแพรแน่นอน 555
                    </h1>

                </div>

                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">ค้นหาที่เที่ยว:</label>
                        <div className="input flex">
                            <input type="text" placeholder='ใส่ช่ือตรงนี้...'/>
                            <TbLocationDollar className="icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default  Home