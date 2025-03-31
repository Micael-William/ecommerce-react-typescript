import React from "react";
import style from "./Item.module.css";
interface iProduto {
    nome: string,
    imagem: string
}

const Item = ({nome, imagem}: iProduto) => {
    return (
        <li>
            <img className={style.img} src={imagem} alt={nome && ""} />
            <span className={style.legenda}>{nome}</span>
        </li>
    )
}

export default Item;