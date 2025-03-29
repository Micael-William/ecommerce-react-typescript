import React from "react";
import style from "./Busca.module.css";

interface iForm {
    children: React.ReactNode
}

const Busca = ({children}: iForm) => {
    return (
        <section className={style.secaoBusca}>
            {children}
        </section>
    )
}

export default Busca;