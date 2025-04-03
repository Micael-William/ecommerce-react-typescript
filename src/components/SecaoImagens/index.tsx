import React, { useEffect, useState } from "react";
import style from "./SecaoImagens.module.css";
import Item from "./Item";
import im1 from "../../assets/img/1616492395_Samsung-Galaxy-S21-Ultra-1608287647-0-0.jpg";
import im2 from "../../assets/img/1616500092_sm-zfold.jpg";
import im3 from "../../assets/img/1616500410_OnePlus-8T-5G-Lunar-Silver-8GB-RAM-128GB-Storage-image-4.jpg";
import im4 from "../../assets/img/1616502847_hdphn.jpg";
import im5 from "../../assets/img/1616502847_hdphn.jpg";
import im6 from "../../assets/img/tablet.jpg";
import im7 from "../../assets/img/blusa.png";
import { useNavigate } from "react-router-dom";
import { Categoria } from "../../types/type";

import data from "../../Data/data.json";

const Imagens = () => {

    let categorias = [...data];
    const img = [im1, im2, im3, im4, im5, im6,im7];
    const navigate = useNavigate();

    function redirecionarParaDetalhes(item: Categoria) {
        navigate(`/categoria/${item.id}`, { state: { item }, replace: true });
    }



    return (
        <section className={style.secaoItem}>
            <ul>
                {categorias.map((item, index) => 
                    (
                        <Item key={index}
                            id={item.id}
                            imagem={img[index]} 
                            nome={item.nome}
                            descricao={item.descricao}
                            quantidade={item.quantidade}
                            preco={item.preco} onClick={() => redirecionarParaDetalhes(item)}
                        />
                    ))
                }
            </ul>
        </section>
    );
};

export default Imagens;