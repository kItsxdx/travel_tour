import React from 'react'
import './home.scss'
import video from '../../Assets/video3.mp4';
import {TbLocationDollar} from 'react-icons/tb'
import {HiFilter} from 'react-icons/hi'



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

                    <div className="dateInput">
                        <label htmlFor="date">เลือกวันที่เที่ยว:</label>
                        <div className="input flex">
                            <input type="date"/>
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">ราคาสูงสุด:</label>
                            <h3 className="total">฿1,000,000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="10000000" min="10000" />
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <HiFilter className="icon"/>
                        <span>More Filter</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default  Home