import React from "react";
import InfoCardCss from "./InfoCard.module.css";

function InfoCard({ name, pic, link, video, description }) {

  return (
    <div className={InfoCardCss.card}>
      <div className={InfoCardCss.content}>
        <img className={InfoCardCss.img} src={pic} alt='imagen no encontrada' />
        <p className={InfoCardCss.heading}>{name}</p>
        <p className={InfoCardCss.para}> {description}</p>
        <div className={InfoCardCss.ctn_btn}>
          <a className={InfoCardCss.btn} href={link} target="_blank">Ir a la app</a>
          {video ? <a className={InfoCardCss.btn} href={video} target="_blank">ver video</a> : null}
        </div>
      </div>
    </div>

  )
}
export default InfoCard;