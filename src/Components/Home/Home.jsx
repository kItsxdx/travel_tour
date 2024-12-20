import React from 'react'
import './home.css'
import video from '../../Assets/video2.mp4';
const Home = () => {
    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type ="video/mp4"></video>


            <div className="homeContent container">
                <div className="textDiv">
                    <span className="smallText">
                        ได้เที่ยวกับแมวของคุณ
                    </span>

                    <h1 className="homeTitle">
                        เราคือมิจที่จะพานำเที่ยวไม่ลอยแพรแน่นอน 555
                    </h1>
                    
                </div>
            </div>
        </section>
    )
}

export default Home