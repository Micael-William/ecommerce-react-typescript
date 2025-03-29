import React from "react";
import style from "./Item.module.css";

interface iItem {
    nome: string,
    imagem: string
}

const Item = ({nome, imagem}: iItem) => {
    return (
        <li>
            <img className={style.img} src={imagem} alt={nome && ""} />
            <span className={style.legenda}>{nome}</span>
        </li>
    )
}

export default Item;