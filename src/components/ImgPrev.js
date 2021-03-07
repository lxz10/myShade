import React, { useState } from 'react';
import placeholder from '../assets/images/pic02.jpg'
import Avatar from 'react-avatar-edit'

const ImgPrev = () => {
    const [{alt, src}, setImg] = useState({
        src: placeholder,
        alt: 'Upload an Image'
    });

    const [template, setHasTemplate] = useState(true);

    const handleImg = (e) => {
        if(e.target.files[0]) {
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });   
            setHasTemplate(false); 
        }   
    }

    return (
        <form encType="multipart/form-data">
            <div className="form__img-input-container">
                <input 
                    type="file" 
                    accept=".png, .jpg, .jpeg" 
                    id="photo" 
                    className="visually-hidden"
                    onChange={handleImg}
                />
                
                    <label htmlFor="photo" className="form-img__file-label">
                    { template ? <svg width="100" height="100" viewBox="0 0 16 18" fill="none" stroke="rgba(244,244,255,0.2)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                    </svg> : null}
                    </label> 
            <img src={src} alt={alt} className="form-img__img-preview"/>  
            </div>
        </form>
    );

} 

export default ImgPrev;
