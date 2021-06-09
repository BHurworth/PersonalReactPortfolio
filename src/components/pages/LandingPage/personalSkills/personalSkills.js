import React from 'react';
import blobFinal from '../../../../assets/images/blob-collection.png';

export default function personalSkills() {
    return (
      <div className="personalSkills-wrapper">
        <h1 id="sub-title">Personal Skills</h1>
        <div id="divider-line"></div>
        <img src={blobFinal} className="personalSkills-blob"></img>
      </div>
    );
}
