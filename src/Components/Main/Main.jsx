import React from 'react'
import './main.css'

import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';

import img1 from '../../Assets/img1.JPG';
import img2 from '../../Assets/img2.JPG';
import img3 from '../../Assets/img3.JPG';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.JPG';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';

const Data = [
    {
    id: 1,
    imgSrc: img1,
    destTitle: 'Chiang mai',
    location: 'Thailand',
    grade: 'Cuktural Relax',
    fees: '$700',
    description: 'Chiamai is one of the best travel destination in the world. this place is known for it is Nature , mountains and there is a wide variety of food to eat and many tourist attractions.'
    },


    {
    id: 2,
    imgSrc: img2,
    destTitle: 'Phuket',
    location: 'Thailand',
    grade: 'Beach Paradise',
    fees: '$850',
    description: "Phuket is tropical paradise known for its stunning beaches, vibrant nightlife, and luxury resorts. It's a great place for snorkeling, driving, and exploring local markets."
    },


    {
    id: 3,
    imgSrc: img3,
    destTitle: 'Bangkok',
    location: 'Thailand',
    grade: 'Urban Advengture',
    fees: '$500',
    description: "Bangkok, the capital of Thailand, offers a mix of ancient temples, bustling markets, and modern skyscrapers. It's a must-visit for its culture, street food, and shopping experience."
    },


    {
    id: 4,
    imgSrc: img4,
    destTitle: 'Krabi',
    location: 'Thailand',
    grade: 'Nature Escape',
    fees: '$600',
    description: "Krabi is famous for its limestone cliffs, clear waters, and beautiful islands. Visitors can enjoy rock climbing, island hopping, and relaxing on the pristine beaches."
 
    
    },

    {
    id: 5,
    imgSrc: img5,
    destTitle: 'Chiang Rai',
    location: 'Thailand',
    grade: 'Cultural Heritage',
    fees: '$650',
    description: "Chiang Rai is known for its unique temples, such as the White Temple and Blue Temple, as well as its lush green landscapes and local hill tribes."
    },
     

    {
    id: 6,
    imgSrc: img6,
    destTitle: 'Pattaya',
    location: 'Thailand',
    grade: 'Beach & Entertainment',
    fees: '$550',
    description: "Pattaya is a vibrant coastalcity known for its lively nightlife,beautiful beaches, and water sports.Visitors can also explore nearby islands andfamily-friendly attractions."
    },
    
    {
    id: 7,
    imgSrc: img7,
    destTitle: 'Ayutthaya',
    location: 'Thailand',
    grade: 'Historic Heritage',
    fees: '$400',
    description: "Ayutthaya, a UNESCO World Heritage Site, is famous for its ancient ruins and temples. It's a great destination for history enthusiasts and cultural explorers."
    },


     {
    id: 8,
    imgSrc: img8,
    destTitle: 'Koh Samui',
    location: 'Thailand',
    grade: 'Island Escape',
    fees: '$900',
    description: "Koh Samui is a world-renowned island known for its palm-fringed beaches, luxury resorts, and vibrant nightlife. It's perfect for relaxation and adventure alike."
    },
    
    
    {
    id: 9,
    imgSrc: img9,
    destTitle: 'Sukhothai',
    location: 'Thailand',
    grade: 'Ancient Wonder',
    fees: '$500',
    description: "Sukhothai, the first capital of Thailand, offers stunning historical parks filled with ancient temples and statues. It's a window into the country's rich history."
    },
]
const Main = () => {
    return (
        <section className='main contrainer section'>
            <div className="secTitle">
            <h3 className="title">
                Most visited destinations
            </h3>
            </div>


            <div className="secContent grid">
                {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => 
                {
                    return( <div key={id} 
                            className="singleDestination">

                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">

                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>

                                    <span className="continect flex">
                                        <HiOutlineLocationMarker className='icon'/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS<HiOutlineClipboardCheck className='icon'/>
                                    </button>
                                </div>
                            </div>)
                }
            )
                }
            </div>
        </section>
    )
}

export default Main