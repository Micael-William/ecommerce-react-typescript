import React from "react";
import style from "./Item.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Categoria } from "../../../types/type";
interface iProduto {
    id: number,
    nome: string,
    imagem: string,
    descricao: string,
    quantidade: number,
    preco: number,
    onClick: (item: Categoria) => void
}



const Item = ({id, nome, imagem, descricao, quantidade, preco, onClick}: iProduto) => {
    return (
        <li>
            <button onClick={() => onClick({ id, nome, imagem, descricao, quantidade, preco })}>
                <img className={style.img} src={imagem} alt={nome} />
            </button>
            <span className={style.legenda}>{nome}</span>
        </li>
    )
}

export default Item;