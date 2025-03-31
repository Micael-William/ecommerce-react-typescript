import React, { useState } from "react";
import style from "./Main.module.css";
import Footer from "../Footer";
import dados from "../../Data/data.json";
import Item from "./Item";
import im1 from "../../assets/img/1616492395_Samsung-Galaxy-S21-Ultra-1608287647-0-0.jpg";
import im2 from "../../assets/img/1616500092_sm-zfold.jpg";
import im3 from "../../assets/img/1616500410_OnePlus-8T-5G-Lunar-Silver-8GB-RAM-128GB-Storage-image-4.jpg";
import im4 from "../../assets/img/1616502847_hdphn.jpg";
import im5 from "../../assets/img/1616502847_hdphn.jpg";
import im6 from "../../assets/img/tablet.jpg";
import im7 from "../../assets/img/blusa.png";

const Main = () => {
    const [produtos, setProdutos] = useState(dados);
    const img = [im1, im2, im3, im4, im5, im6,im7];
    
   
    return (
        <>
            <main>
                <section className={style.secaoTitulo}>
                    <h1>Produtos novos e <br />lançamentos</h1>
                    <br />
                    <p>1.500 produtos encontrados</p>
                </section>
               
                <div className={style.principal}>
                    {
                        produtos.map((produto, index) => (
                            <Item key={produto.id}
                                id={produto.id}
                                nome={produto.nome}
                                descricao={produto.descricao}
                                quantidade={produto.quantidade}
                                preco={produto.preco}
                                imagem={img[index]}
                            />
                        ))
                    }
                </div>
            </main>
        </>
    );
}

export default Main;