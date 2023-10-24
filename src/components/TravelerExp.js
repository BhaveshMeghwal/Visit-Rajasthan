import React from 'react'
import './TravelerExp.css'

const images = [
    { src: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80',  alt: 'Image 1' },
    { src: 'https://images.unsplash.com/photo-1636012873375-f77a63af3f9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhamFzdGhhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'Image 2' },
    { src: 'https://images.unsplash.com/photo-1622225641765-8c8ef0dcb678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhamFzdGhhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'Image 3' },
    { src: 'https://images.unsplash.com/flagged/photo-1577605047476-202951cec757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhamFzdGhhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'Image 4' },
    { src: 'https://images.unsplash.com/photo-1571587646216-3a104fc86851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhamFzdGhhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'Image 5' },
    {src: 'https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80'},
    { src: 'https://img.freepik.com/free-photo/lake-jodhpur-rajasthan-india_53876-165304.jpg?w=1060&t=st=1695902697~exp=1695903297~hmac=6bcc1203327f3c253b8fc73e61de18e51c9e9d83a0b64a178164ca2eb08ad1ab', alt: 'Image 7' },
    { src: 'https://images.unsplash.com/photo-1571587646216-3a104fc86851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhamFzdGhhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'Image 8' },
  ];


const TravelerExp = () => {
    return (
        <div className=' p-60'>
            <h1 className='font-bold text-4xl text-center'>Travel Photos</h1>
            <div className='gallery'>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className="gallery__item"
                            src={image.src}
                            alt={image.alt}
                        />
                    ))}
            </div>
        </div>
    )
}

export default TravelerExp