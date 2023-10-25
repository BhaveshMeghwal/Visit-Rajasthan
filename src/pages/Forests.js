import React, { useState, useEffect } from 'react'
import './Forts.css'
import Card from '../components/Card'
import { database, ref, onValue } from '../Firebase'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Forests = () => {
    const [data, setData] = useState({});
    const dataRef = ref(database, '/wildlife');

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
    return (
        <>
        <Navbar bgColor={"#29AB87"} color={"#000"} />
            <div className='forest_section'>
                <div className='image_container'>
                    {/* <img src='https://images.unsplash.com/photo-1630577303708-c50de21cf8ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1859&q=80' alt='' /> */}
                    {/* <h1 className='text-center font-bold'>Walls That Whisper Tales: <br /> Rajasthan's Fortresses</h1> */}
                    {/* <video src={vid} muted autoPlay/> */}
                    {/* <iframe width="100%" height="00%" src="https://www.youtube.com/embed/RmxaeW-abNk?si=zdJKt5hyhTVlnih-&amp;controls=0&amp;start=138" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe> */}
                </div>
                <div className='forts_section'>
                    <h1 className=' heading_font text-center font-bold'>Wildife <br/>Journey to the Wild: Rajasthan's Sanctuaries</h1>
                    
                    <p>
                    Rajasthan, known for its expansive deserts and historical grandeur, also hides within its borders a treasure trove of diverse wildlife and lush forests. These ecological havens provide a stark contrast to the arid landscapes, offering a thriving ecosystem for numerous species of flora and fauna. Ranthambore National Park, one of India's premier tiger reserves, is a prominent highlight. Here, the regal Bengal tiger reigns supreme, while leopards, sloth bears, and a rich avian population add to the park's allure. Keoladeo National Park, a UNESCO World Heritage Site, is a wetland paradise for bird enthusiasts, with migratory birds from across the globe making it their seasonal home. Sariska Tiger Reserve, too, is home to the majestic big cats, along with various other wildlife species.
                        
                    </p>

                    <div className='forts_card '>
                    {Object.keys(data).map((key) => (
                                    <Card key={data[key]}
                                        name={data[key].name} img={data[key].image_url} destination="Amer fort" />

                        ))}
                    </div>
                </div>
                <Footer/>
            </div>
            
        </>
    )
}

export default Forests