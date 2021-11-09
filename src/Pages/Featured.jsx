import React, { useState } from "react";
import Button from "./Button"
import { Article } from "./Articlelist";
import { Buyer } from "./Buyer-articles";
import { Seller } from "./Seller-articles";
import { Inspiration } from "./Inspiration";
import { Advertisement } from "./Advertisement-articles";

const Featured = () => {
  const [openCat, setOpenCat] = useState(true);
  const [openbuyer, setOpenbuyer] = useState(false);
  const [openSeller, setOpenSeller] = useState(false);
  const [openAdvertise, setOpenAdvertise] = useState(false);
  const [openInspiration, setOpenInspiration] = useState(false);

  const allcat = () => {
    setOpenCat(true);
    setOpenbuyer(false);
    setOpenSeller(false);
    setOpenAdvertise(false);
    setOpenInspiration(false);
  };
  const buyer = () => {
    setOpenbuyer(true);
    setOpenCat(false);
    setOpenSeller(false);
    setOpenAdvertise(false);
    setOpenInspiration(false);
  };
  const seller = () => {
    setOpenSeller(true);
    setOpenbuyer(false);
    setOpenCat(false);
    setOpenAdvertise(false);
    setOpenInspiration(false);
  };
  const inspiration = () => {
    setOpenInspiration(true);
    setOpenbuyer(false);
    setOpenCat(false);
    setOpenSeller(false);
    setOpenAdvertise(false);
  };
  const Advertise = () => {
    setOpenAdvertise(true);
    setOpenbuyer(false);
    setOpenCat(false);
    setOpenSeller(false);
    setOpenInspiration(false);
  };
  // const filter =()=>{
  //   if(articles > 3){
  //     return articles.
  //   }
  // }
  return (
    <div className="featured">
      <h2>Featured Articles from us</h2>
      <div className="links">
        <p onClick={allcat} className={openCat ? "active varieties" : "varieties"}>
          All Categories
        </p>
        <p onClick={buyer} className={openbuyer ? "active varieties" : "varieties"}>
          Buyer
        </p>
        <p onClick={seller} className={openSeller ? "active varieties" : "varieties"}>
          Seller
        </p>
        <p onClick={Advertise} className={openAdvertise ? "active varieties" : "varieties"}>
          Advertise
        </p>
        <p onClick={inspiration} className={openInspiration ? "active varieties" : "varieties"}>
          Inspiration
        </p>
      </div>
      {openCat ? (
        <div className="articles-list">
          {Article.map((articles, index) => {
            return (
              <div key={index} className={articles.cName}>
                <div>{articles.image}</div>
                <h3>{articles.header}</h3>
                <p>{articles.text}</p>
              </div>
            );
          })}
        </div>
      ) : null}
      {openbuyer ? (
        <div className="articles-list">
          {Buyer.map((buyer, index) => {
            return (
              <div key={index} className={buyer.cName}>
                <div className="image">{buyer.image}</div>
                <h3>{buyer.header}</h3>
                <p>{buyer.text}</p>
              </div>
            );
          })}
        </div>
      ) : null}
      {openSeller ? (
        <div className="articles-list">
          {Seller.map((selling, index) => {
            return (
              <div key={index} className={selling.cName}>
                <div className="image">{selling.image}</div>
                <h3>{selling.header}</h3>
                <p>{selling.text}</p>
              </div>
            );
          })}
        </div>
      ) : null}
      {openAdvertise ? (
        <div className="articles-list">
          {Advertisement.map((Advertise, index) => {
            return (
              <div key={index} className={Advertise.cName}>
                <div className="image">{Advertise.image}</div>
                <h3>{Advertise.header}</h3>
                <p>{Advertise.text}</p>
              </div>
            );
          })}
        </div>
      ) : null}
      {openInspiration ? (
        <div className="articles-list">
          {Inspiration.map((inspire, index) => {
            return (
              <div key={index} className={inspire.cName}>
                <div className="image">{inspire.image}</div>
                <h3>{inspire.header}</h3>
                <p>{inspire.text}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    <Button />
    </div>
  );
};

export default Featured;
