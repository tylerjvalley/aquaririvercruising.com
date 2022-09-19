import React, { useState } from "react";


function GalleryOne({galleryItem}) {
    const { image, title, description, linkText, link } = galleryItem;
    
    return (
        <div className="rn-gallery icon-center">
            <div className="thumbnail">
                <img style={{height: "600px"}} className="radius-small" src={`${process.env.PUBLIC_URL + '/' +  image}`} alt="Corporate" />
            </div>
            <div className="container">
                <h5>{title}</h5>
                <p>{description}</p>
                <a hidden={!link} href={link}><h4 className="mt-5" style={{textAlign: "center", color: "#0560B3", textDecoration: "underline"}}>{linkText}</h4></a>
            </div>
        </div>
    )
}
export default GalleryOne;