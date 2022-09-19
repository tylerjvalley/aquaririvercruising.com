import React, { useState } from "react";


function Gallery({galleryItem}) {
    const { image, title, description, description2, description3, description4, linkText, link } = galleryItem;
    
    return (
        <div className="rn-gallery popup2 icon-center" style={{margin: "50px 0"}}>
            <div>
                <img className="radius-small" src={`${process.env.PUBLIC_URL + '/' +  image}`} alt="Corporate" />
            </div>
            <div className="text" style={{width: "50%"}}>
                <h5>{title}</h5>
                <p>{description}</p>
                <p>{description2}</p>
                <p>{description3}</p>
                <p>{description4}</p>
                <a hidden={!link} href={link}><h4 className="mt-5" style={{textAlign: "center", color: "#0560B3", textDecoration: "underline"}}>{linkText}</h4></a>
            </div>
            
        </div>
    )
}
export default Gallery;