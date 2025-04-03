import categoria  from '../Data/data.json'

export default interface iItem {
    id: number | string,
    nome: string,
    descricao: string,
    quantidade: number | string,
    preco: number | string,
    imagem: string,
}

export type Data = typeof categoria;

export type Categoria = typeof categoria[0];