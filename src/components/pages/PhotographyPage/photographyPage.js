import React, { useState } from "react";
import Header from "../../Header/Header";
import drop1 from "../../../assets/images/drop 1.jpg";
import drop2 from "../../../assets/images/drop.jpg";
import drop3 from "../../../assets/images/drop3.jpg";
import drop4 from "../../../assets/images/drop4.jpg";
import drop5 from "../../../assets/images/drop5.jpg";
import monkey1 from "../../../assets/images/monkey1.jpg";
import monkey2 from "../../../assets/images/monkey2.jpg";
import SelectedImage from "./SelectedImage";

export default function PhotographyPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeImage = () => {
    setSelectedImage(null);
  }

  return (
    <div className="photography-page-wrapper">
      <Header
        color="rgba(99,128,235, 0.8)"
        className="photography-nav"
        className2="photography-nav-header-items"
      ></Header>
      <div className="photography-wrapper">
        <div className="photography-header-section">
          <h1 className="photography-header-title">My Gallery</h1>
          <h5 className="photography-header-subtitle">
            All photos were taken on a Canon 5D Mark III
          </h5>
          <h6 className="photography-header-socialmedia-title">
            Connect with me to see more!
          </h6>
        </div>
        <div className="photography-gallery-section">
          <ul className="photography-gallery-ul">
            <img
              className="photography-gallery-img"
              src={drop1}
              onClick={() => setSelectedImage(drop1)}
            ></img>
            <img
              className="photography-gallery-img"
              src={drop2}
              onClick={() => setSelectedImage(drop2)}
            ></img>
            <img className="photography-gallery-img" src={drop3} onClick={() => setSelectedImage(drop3)}></img>
            <img className="photography-gallery-img" src={drop4} onClick={() => setSelectedImage(drop4)}></img>
            <img className="photography-gallery-img" src={drop5} onClick={() => setSelectedImage(drop5)}></img>
            <img className="photography-gallery-img" src={monkey1} onClick={() => setSelectedImage(monkey1)}></img>
            <img className="photography-gallery-img" src={monkey2} onClick={() => setSelectedImage(monkey2)}></img>

            {selectedImage && (
              <SelectedImage
                closeImage={closeImage}
                selectedImage={selectedImage}
              ></SelectedImage>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
