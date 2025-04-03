import React from "react";
import style from "./Categoria.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { Categoria } from "../../types/type";
import produtos from "../../Data/data.json";
import Icone from "../../components/Icones";

const CategoriaProduto = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const data = [...produtos];

    const produtoId = produtos.find((produto) => { return produto.id === Number(id) })
    console.log(produtoId)

    if (!produtoId) {
        return null;
    }

    return (
        <>
            {/* <button className={style.voltar} onClick={() => navigate("/")}>
                {'< Voltar'}
            </button> */}
            <main>
               
                
                <div className={style.principal}>
                    <section className={style.containerProduto}>
                        <span className={style.quantidade}>({produtoId.quantidade})</span>
                        <span className={style.favoritar}><i className="bi bi-heart-fill favoritar"></i></span>
                        <img className={style.logoProduto} src={produtoId.imagem} alt={produtoId.nome} />
                        <Icone />
                        <span className={style.nomeProduto}>{produtoId.nome}</span>
                        <span className={style.descricao}>{produtoId.descricao}</span>
                        <span className={style.preco}>R$ {produtoId.preco},00</span>
                        <button className={style.btnCarrinho}><i className="bi bi-cart cart"></i>Adicionar ao carrinho</button>
                    </section>
                    
                </div>
            </main>
        </>
    );
}

export default CategoriaProduto;