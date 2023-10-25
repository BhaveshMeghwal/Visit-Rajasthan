import React, { useState, useEffect } from 'react'
import './Forts.css'
import Card from '../components/Card'
import { database, ref, onValue } from '../Firebase'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Fairs = () => {

    const [data, setData] = useState({});
    const dataRef = ref(database, '/festivals');

    useEffect(() => {
        // Attach a listener to the database reference
        const unsubscribe = onValue(dataRef, (snapshot) => {
            // Retrieve and update data in real-time
            if (snapshot.exists()) {
                setData(snapshot.val());
            }
        });

        // Clean up the listener when the component unmounts
        return () => {
            unsubscribe();
        };
    }, []);

    console.log(data)
    return (
        <>
        <Navbar bgColor={"#800000"} color={"#ffd354"}/>
            <div className='fairs_section'>
                <div className='image_container'>
                    {/* <img src='https://exclusiveindiajourneys.com/storage/app/trends/pushkar-fair-2023/WlLCZchTQEidxQNCc7NF0bjxQ5ENQgCmQngm1JMZ.jpg' alt='' /> */}
                    {/* <h1 className='text-center font-bold'>{data.main_heading}</h1> */}
                    {/* <video src={vid} muted autoPlay/> */}
                    {/* <iframe width="100%" height="00%" src="https://www.youtube.com/embed/RmxaeW-abNk?si=zdJKt5hyhTVlnih-&amp;controls=0&amp;start=138" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe> */}
                </div>
                <div className='forts_section'>
                    <h1 className='heading_font text-center '>Fairs</h1>
                    <h1 className='line_font-size text-center py-10'> Rajasthan, often referred to as the "Land of Forts"</h1>
                    <p>
                    Rajasthan, a land of vibrant traditions and cultural extravagance, is renowned for its grand and colorful fairs that showcase the heart and soul of the state. These lively events are a tapestry of age-old customs, artistry, and exuberant celebrations. The Pushkar Camel Fair, one of the world's largest camel fairs, is a mesmerizing spectacle where thousands of camels and livestock converge, alongside colorful stalls and traditional performances. The Desert Festival in Jaisalmer, set against the backdrop of golden dunes, brings the desert to life with folk music, dance, and traditional sports. The Teej Festival, celebrated by women with great fervor, is a showcase of traditional attire and vibrant processions. Rajasthan's fairs are a window into the state's rich heritage, allowing visitors to immerse themselves in its cultural tapestry, savor traditional cuisine, and witness skilled artisans at work. These fairs are an unmissable experience, offering an authentic and enchanting journey into Rajasthan's colorful traditions.
                    </p>

                    <div className='forts_card '>
                        {/* {JSON.stringify(data, null, 2)} */}

                        {Object.keys(data).map((key) => (
                                <Link to={data[key].name} >
                                    <Card key={data[key]}
                                        name={data[key].name} img={data[key].image_url} destination="Amer fort" />

                                </Link>
                        ))}

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Fairs