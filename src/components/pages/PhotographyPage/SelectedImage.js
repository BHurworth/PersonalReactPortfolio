import React, { useState } from 'react'

export default function SelectedImage( { selectedImage, closeImage }) {

    return (
        <div className='backdrop'>
            <button className='btn' onClick={closeImage}></button>
            <img src={selectedImage} alt="enlarged image" />
        </div>
    )
}
