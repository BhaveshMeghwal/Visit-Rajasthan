import React, { useState, useEffect } from 'react'
import './Forts.css'
import Card from '../components/Card'
import { database, ref, onValue } from '../Firebase'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Lakes = () => {

    const [data, setData] = useState({});
    const dataRef = ref(database, '/lakes');

    useEffect(() => {
        const unsubscribe = onValue(dataRef, (snapshot) => {
            if (snapshot.exists()) {
                setData(snapshot.val());
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <>
        <Navbar bgColor={"#00A8A8"} color={"#ffd354"}/>
            <div className='lake_section'>
                <div className='image_container'>
                    {/* <img src='https://www.theleela.com/prod/content/assets/styles/tl_1920_735/public/aio-banner/dekstop/Lake-Pichola-All-about-Udaipur%27s-most-famous-attraction.jpg?VersionId=53uAWYFjJBmJt3TVX8wccvDe1BI3z4YG&itok=X1uO5zNJ' alt='' /> */}
                    {/* <h1 className='text-center font-bold'>Walls That Whisper Tales: <br /> Rajasthan's Fortresses</h1> */}
                    {/* <video src={vid} muted autoPlay/> */}
                    {/* <iframe width="100%" height="00%" src="https://www.youtube.com/embed/RmxaeW-abNk?si=zdJKt5hyhTVlnih-&amp;controls=0&amp;start=138" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen></iframe> */}
                </div>
                <div className='forts_section'>
                    <h1 className='heading_font text-center'>Lakes</h1>
                    <p>
                       
Rajasthan, a state known for its arid landscapes, paradoxically boasts an exquisite collection of lakes and waterbodies that serve as oases of tranquility and natural beauty. These pristine water reservoirs are scattered throughout the region, offering respite to both locals and visitors. The shimmering Lake Pichola in Udaipur, with the City Palace standing tall on its shores, epitomizes the regal charm of Rajasthan. Pushkar Lake, surrounded by numerous ghats and ancient temples, holds immense religious significance and is a hub of cultural festivities. The tranquil Sambhar Lake, India's largest inland saltwater lake, mesmerizes with its vast, glistening expanse. The calm and pristine waters of the Ana Sagar Lake in Ajmer provide a peaceful escape from the city's hustle and bustle. Rajasthan's lakes and waterbodies offer a serene backdrop for reflection, relaxation, and exploration, providing a stark yet captivating contrast to the state's rugged desert terrain.

                    </p>

                    <div className='forts_card '>
                        
                        {Object.keys(data).map((key) => (
                            <Card key={data[key]}
                                name={data[key].name} img={data[key].image_url} destination={data[key].city} />
                        ))}

                    </div>
                </div>
                <Footer/>
            </div>
            
        </>
    )
}

export default Lakes