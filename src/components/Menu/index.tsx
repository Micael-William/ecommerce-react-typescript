import React, { useState } from "react";
import style from "./Menu.module.css";
import img from "./icone.svg";
import Imagens from "../SecaoImagens";
import Busca from "../Busca";
import { Link } from "react-router-dom";

const Menu = () => {
    const [flag, setFlag] = useState(false);
    
    function abrirMenuMobile(menu: string) {
        if(menu === "abrir"){
            setFlag(true)
        }else if (menu === "fechar"){
            setFlag(false)
        }
    }

    return (
        <>
            <header className={style.containerCabecalho}>
                <img className={style.img} src={img} alt="" onClick={() => abrirMenuMobile('abrir')} />
                <Link to={"/home"} className={style.titulo}>Ecommerce</Link>
                <div className={style.atributos}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                </div>
                <div className={flag === false ? style.fechado: style.aberto} >
                    <div className={style.botao}>
                        <button className={style.close} onClick={() => abrirMenuMobile('fechar')}>X</button>
                    </div>
                    <ul className="lista-menu">
                        <li className="item-menu">
                            <a href="/favoritos" className="link-favorito"><i className="bi bi-heart-fill meus-favoritos"></i>Meu favoritos</a>
                            <i className="bi bi-arrow-right-short arrow-right"></i>
                        </li>
                    </ul>
                </div>
            </header>
            <Busca />
            <Imagens />
        </>
    );
}

export default Menu;