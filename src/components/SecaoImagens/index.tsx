import React, { useEffect, useState } from "react";
import style from "./SecaoImagens.module.css";
import Item from "./Item";
import { v4 as uuid } from "uuid";
import im1 from "../../assets/img/1616492395_Samsung-Galaxy-S21-Ultra-1608287647-0-0.jpg";
import im2 from "../../assets/img/1616500092_sm-zfold.jpg";
import im3 from "../../assets/img/1616500410_OnePlus-8T-5G-Lunar-Silver-8GB-RAM-128GB-Storage-image-4.jpg";
import im4 from "../../assets/img/1616502847_hdphn.jpg";
import im5 from "../../assets/img/computer.jpg";

const Imagens = () => {

    const lista = [
        { id: uuid(), nome: "Galaxy", imagem: im1 },
        { id: uuid(), nome: "zfold", imagem: im2 },
        { id: uuid(), nome: "OnePlus", imagem: im3 },
        { id: uuid(), nome: "dhphn", imagem: im4 },
        { id: uuid(), nome: "computer", imagem: im5 },
    ];


    return (
        <section className={style.secaoItem}>
            <ul>
                {lista.map((item, index) => 
                    (
                        <Item imagem={item.imagem} key={index} nome={item.nome} />
                    ))
                }
            </ul>
        </section>
    );
};

export default Imagens;