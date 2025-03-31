import React from "react";
import iItem from "../../../types/type";
import Icone from "../../Icones";
import style from "../Main.module.css";

const Item = ({nome, descricao, quantidade, preco, imagem}: iItem) => {
    return (
        <section className={style.containerProduto}>
            <span className={style.quantidade}>({quantidade})</span>
            <span className={style.favoritar}><i className="bi bi-heart-fill favoritar"></i></span>
            <img className={style.logoProduto} src={imagem} alt={nome} />
            <Icone />
            <span className={style.nomeProduto}>{nome}</span>
            <span className={style.descricao}>{descricao}</span>
            <span className={style.preco}>R$ {preco},00</span>
            <button className={style.btnCarrinho}><i className="bi bi-cart cart"></i>Adicionar ao carrinho</button>
        </section>
    );
}

export default Item;