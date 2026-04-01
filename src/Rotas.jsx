import { Route, Routes } from "react-router-dom";

import FormCategoriaProduto from "./views/categoriaproduto/FormCategoriaProduto";
import ListCategoriaProduto from "./views/categoriaproduto/ListCategoriaProduto";
import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import Home from './views/home/Home';
import FormProduto from "./views/produto/FormProduto";
import ListProduto from "./views/produto/ListProduto";

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />

                <Route path="form-categoria" element={ <FormCategoriaProduto/> } />
                <Route path="list-categoria" element={ <ListCategoriaProduto/> } />

                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="list-produto" element={ <ListProduto/> } />
            </Routes>
        </>
    )
}

export default Rotas