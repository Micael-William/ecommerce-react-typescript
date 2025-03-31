import React from "react";
import style from "./Busca.module.css";
import Formulario from "../Formulario";


const Busca = () => {
    return (
        <section className={style.secaoBusca}>
           <Formulario method='POST' />
        </section>
    )
}

export default Busca;