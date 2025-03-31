import React from "react";
import style from "./Icone.module.css";

const Icone = () => {
    return (
        <div className={style.avaliacao}>
            <i className="bi bi-star-fill icone-star"></i>
            <i className="bi bi-star-fill icone-star"></i>
            <i className="bi bi-star-fill icone-star"></i>
            <i className="bi bi-star-fill icone-star"></i>
            <i className="bi bi-star-fill icone-star"></i>
        </div>
    );
}

export default Icone;